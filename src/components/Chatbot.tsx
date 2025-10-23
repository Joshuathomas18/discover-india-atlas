import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { chatbotResponses } from "@/data/jaipurData";

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Namaste! 🙏 I'm here to help you explore India's rich culture. Ask me anything about Jaipur!", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(chatbotResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return chatbotResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = { text: getResponse(input), isBot: true };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl hover:shadow-accent/50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
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
                <h3 className="font-bold text-lg">Ask Incredible India</h3>
                <p className="text-sm opacity-90">Your cultural guide</p>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-3 bg-card">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-muted text-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-card">
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about culture, food, monuments..."
                    className="flex-1"
                  />
                  <Button size="icon" onClick={handleSend}>
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
