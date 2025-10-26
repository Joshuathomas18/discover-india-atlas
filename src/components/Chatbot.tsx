import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { Button, MetalButton } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { universalRAGService, ChatbotMessage, SourceCitation } from "@/services/universalRAGService";
import { tripPlannerService } from "@/services/tripPlannerService";
import { poiNavigationService } from "@/services/poiNavigationService";
import { ConversationState, TripPreferences, TripItinerary } from "@/types/tripPlanner";
import { PreferenceButtonGrid } from "./trip-planner/PreferenceButton";
import { ItineraryDisplay } from "./trip-planner/ItineraryDisplay";
import { REGION_OPTIONS, TERRAIN_OPTIONS, ACTIVITY_OPTIONS, DAYS_OPTIONS, BUDGET_OPTIONS } from "@/types/tripPlanner";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTripPlannerMode, setIsTripPlannerMode] = useState(false);
  const [messages, setMessages] = useState<ChatbotMessage[]>([
    { text: "Hi! Ready to plan your trip? 🗺️ Do you have a specific place in mind?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tripPlannerState, setTripPlannerState] = useState<ConversationState>(ConversationState.INITIAL);
  const [currentPreferences, setCurrentPreferences] = useState<Partial<TripPreferences>>({});
  const [currentItinerary, setCurrentItinerary] = useState<TripItinerary | null>(null);

  // Initialize trip planner when component mounts
  useEffect(() => {
    if (isOpen && !isTripPlannerMode) {
      setIsTripPlannerMode(true);
      tripPlannerService.initializeSession();
    }
  }, [isOpen, isTripPlannerMode]);

  const handleTripPlannerResponse = async (response: string, optionValue?: string) => {
    const result = tripPlannerService.handleUserResponse(response, optionValue);
    
    // Add user message
    const userMessage: ChatbotMessage = { 
      text: optionValue ? `${response} (${optionValue})` : response, 
      isBot: false 
    };
    setMessages(prev => [...prev, userMessage]);
    
    // Update state
    setTripPlannerState(result.nextState);
    setCurrentPreferences(prev => ({ ...prev, ...tripPlannerService.getCurrentSession().preferences }));
    
    // Add bot response with options stored in the message
    const botMessage: ChatbotMessage = { 
      text: result.message, 
      isBot: true,
      options: result.options,
      questionType: result.questionType
    };
    setMessages(prev => [...prev, botMessage]);
    
    // If generating itinerary, start the process
    if (result.nextState === ConversationState.GENERATING) {
      setIsLoading(true);
      try {
        const itinerary = await tripPlannerService.generateItinerary();
        setCurrentItinerary(itinerary);
        setTripPlannerState(ConversationState.COMPLETE);
        
        // Add itinerary message
        const itineraryMessage: ChatbotMessage = { 
          text: "Your personalized itinerary is ready! 🎉", 
          isBot: true,
          isItinerary: true,
          itinerary: itinerary
        };
        setMessages(prev => [...prev, itineraryMessage]);
      } catch (error) {
        console.error('Error generating itinerary:', error);
        const errorMessage: ChatbotMessage = { 
          text: "Sorry, I couldn't generate your itinerary. Please try again.", 
          isBot: true 
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    if (isTripPlannerMode) {
      await handleTripPlannerResponse(input);
      setInput("");
      return;
    }

    const userMessage: ChatbotMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Search across all states
      const searchResults = await universalRAGService.searchAllStates(input, 5);
      
      // Generate smart response
      const ragResponse = universalRAGService.generateResponse(input, searchResults);
      
      const botResponse: ChatbotMessage = { 
        text: ragResponse.answer, 
        isBot: true,
        sources: ragResponse.sources
      };
      
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorResponse: ChatbotMessage = { 
        text: "Sorry, I'm having trouble connecting to my knowledge base. Please try again later.", 
        isBot: true 
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }

    setInput("");
  };

  const handleRegenerateItinerary = async () => {
    setIsLoading(true);
    try {
      const itinerary = await tripPlannerService.generateItinerary();
      setCurrentItinerary(itinerary);
      
      // Replace the last itinerary message
      setMessages(prev => {
        const newMessages = [...prev];
        const lastItineraryIndex = newMessages.findLastIndex(msg => msg.isItinerary);
        if (lastItineraryIndex !== -1) {
          newMessages[lastItineraryIndex] = {
            ...newMessages[lastItineraryIndex],
            itinerary: itinerary
          };
        }
        return newMessages;
      });
    } catch (error) {
      console.error('Error regenerating itinerary:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModifyPreferences = () => {
    // Reset to initial state for new trip planning
    tripPlannerService.resetSession();
    setTripPlannerState(ConversationState.INITIAL);
    setCurrentPreferences({});
    setCurrentItinerary(null);
    setMessages([{ text: "Hi! Ready to plan your trip? 🗺️ Do you have a specific place in mind?", isBot: true }]);
  };

  const renderTripPlannerOptions = (message: ChatbotMessage) => {
    if (!message.isBot) return null;

    // Use message-specific options if available
    if (message.options) {
      return (
        <PreferenceButtonGrid 
          options={message.options}
          onSelect={(value) => handleTripPlannerResponse("", value)}
          selectedValue={getSelectedValueForQuestion(message.questionType)}
        />
      );
    }

    // Fallback for initial yes/no question (first message)
    if (message.text.includes("Do you have a specific place in mind?")) {
      return (
        <div className="flex gap-2 mt-3">
          <Button 
            onClick={() => handleTripPlannerResponse("Yes", "yes")}
            variant="outline"
            className="flex-1"
          >
            Yes
          </Button>
          <Button 
            onClick={() => handleTripPlannerResponse("No", "no")}
            variant="outline"
            className="flex-1"
          >
            No
          </Button>
        </div>
      );
    }

    return null;
  };

  const getSelectedValueForQuestion = (questionType?: ConversationState) => {
    switch (questionType) {
      case ConversationState.REGION_SELECT:
        return currentPreferences.region;
      case ConversationState.TERRAIN_SELECT:
        return currentPreferences.terrain;
      case ConversationState.ACTIVITY_SELECT:
        return currentPreferences.activityType;
      case ConversationState.DAYS_SELECT:
        return currentPreferences.days;
      case ConversationState.BUDGET_SELECT:
        return currentPreferences.budget;
      default:
        return undefined;
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <MetalButton
          variant="primary"
          className="w-32 h-12 px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm font-medium">Plan your trip!</span>
        </MetalButton>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl border-2 border-primary/20 overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="font-bold text-lg">Trip Planner</h3>
                <p className="text-sm opacity-90">Your AI travel companion</p>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-3 bg-card">
                {messages.map((message, index) => (
                  <div key={index}>
                    <div
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.isBot
                            ? 'bg-muted text-foreground'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        
                        {/* Source Citations */}
                        {message.sources && message.sources.length > 0 && (
                          <div className="mt-3 pt-2 border-t border-border/50">
                            <p className="text-xs text-muted-foreground mb-2">Sources:</p>
                            <div className="space-y-1">
                              {message.sources.map((source, sourceIndex) => (
                                <div key={sourceIndex} className="flex items-center gap-2 text-xs">
                                  <MapPin size={12} className="text-muted-foreground" />
                                  <span className="text-muted-foreground">
                                    {source.name} ({source.state})
                                  </span>
                                  <Badge variant="secondary" className="text-xs px-1 py-0">
                                    {source.type}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Trip Planner Options */}
                    {renderTripPlannerOptions(message)}
                    
                    {/* Itinerary Display */}
                    {message.isItinerary && message.itinerary && (
                      <div className="mt-4">
                        <ItineraryDisplay
                          itinerary={message.itinerary}
                          onRegenerate={handleRegenerateItinerary}
                          onModifyPreferences={handleModifyPreferences}
                          onNavigateToPlace={async (placeId) => {
                            try {
                              await poiNavigationService.navigateToPOI(placeId);
                              // Close chatbot after navigation
                              setIsOpen(false);
                            } catch (error) {
                              console.error('Error navigating to place:', error);
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground p-3 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                        <span className="text-sm">
                          {tripPlannerState === ConversationState.GENERATING ? 'Creating your itinerary...' : 'Searching...'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-card">
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={
                      tripPlannerState === ConversationState.HAS_PLACE 
                        ? "Type the name of the place..." 
                        : "Ask about monuments, food, festivals, waterfalls..."
                    }
                    className="flex-1"
                    disabled={isLoading || tripPlannerState === ConversationState.GENERATING}
                  />
                  <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Close Button */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;