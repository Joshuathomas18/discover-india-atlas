import React from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '../ui/accordion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  Clock, 
  MapPin, 
  Utensils, 
  Bed, 
  RefreshCw, 
  Edit3, 
  Download,
  ChevronRight,
  Calendar,
  DollarSign
} from 'lucide-react';
import { TripItinerary, ItineraryDay, ItineraryActivity } from '../../types/tripPlanner';

interface ItineraryDisplayProps {
  itinerary: TripItinerary;
  onRegenerate: () => void;
  onModifyPreferences: () => void;
  onNavigateToPlace?: (placeId: string) => void;
  className?: string;
}

export const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({
  itinerary,
  onRegenerate,
  onModifyPreferences,
  onNavigateToPlace,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`space-y-6 ${className}`}
    >
      {/* Header */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-800 flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            {itinerary.title}
          </CardTitle>
          <p className="text-gray-700 mt-2">{itinerary.overview}</p>
        </CardHeader>
      </Card>

      {/* Days Accordion */}
      <Accordion type="multiple" className="space-y-4">
        {itinerary.days.map((day, index) => (
          <AccordionItem key={day.day} value={`day-${day.day}`}>
            <AccordionTrigger className="bg-white border border-gray-200 rounded-lg px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                  Day {day.day}
                </Badge>
                <span className="font-semibold text-gray-800">{day.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-gray-50 rounded-b-lg">
              <DayContent 
                day={day} 
                onNavigateToPlace={onNavigateToPlace}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Budget Breakdown */}
      <BudgetBreakdown budgetBreakdown={itinerary.budget_breakdown} />

      {/* Tips */}
      <TipsSection tips={itinerary.tips} />

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-4">
        <Button 
          onClick={onRegenerate}
          variant="outline"
          className="flex items-center gap-2 hover:bg-orange-50 hover:border-orange-300"
        >
          <RefreshCw className="h-4 w-4" />
          Regenerate
        </Button>
        <Button 
          onClick={onModifyPreferences}
          variant="outline"
          className="flex items-center gap-2 hover:bg-orange-50 hover:border-orange-300"
        >
          <Edit3 className="h-4 w-4" />
          Modify Preferences
        </Button>
        <Button 
          onClick={() => {/* TODO: Implement PDF export */}}
          variant="outline"
          className="flex items-center gap-2 hover:bg-orange-50 hover:border-orange-300"
        >
          <Download className="h-4 w-4" />
          Export PDF
        </Button>
      </div>
    </motion.div>
  );
};

interface DayContentProps {
  day: ItineraryDay;
  onNavigateToPlace?: (placeId: string) => void;
}

const DayContent: React.FC<DayContentProps> = ({ day, onNavigateToPlace }) => {
  return (
    <div className="space-y-6">
      {/* Activities Timeline */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Activities
        </h4>
        <div className="space-y-3">
          {day.activities.map((activity, index) => (
            <ActivityCard 
              key={index}
              activity={activity}
              onNavigateToPlace={onNavigateToPlace}
            />
          ))}
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          <Utensils className="h-4 w-4" />
          Meals
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <MealCard type="breakfast" details={day.meals.breakfast} />
          <MealCard type="lunch" details={day.meals.lunch} />
          <MealCard type="dinner" details={day.meals.dinner} />
        </div>
      </div>

      {/* Accommodation */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          <Bed className="h-4 w-4" />
          Accommodation
        </h4>
        <AccommodationCard details={day.accommodation} />
      </div>
    </div>
  );
};

interface ActivityCardProps {
  activity: ItineraryActivity;
  onNavigateToPlace?: (placeId: string) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onNavigateToPlace }) => {
  return (
    <Card className="border-l-4 border-l-orange-400">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                {activity.time}
              </Badge>
              <Badge variant="outline" className="text-gray-600">
                {activity.duration}
              </Badge>
            </div>
            <h5 className="font-semibold text-gray-800 mb-1">{activity.activity}</h5>
            <p className="text-gray-600 text-sm">{activity.description}</p>
          </div>
          {activity.place_id && onNavigateToPlace && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigateToPlace(activity.place_id!)}
              className="ml-3 flex items-center gap-1 hover:bg-orange-50"
            >
              <MapPin className="h-3 w-3" />
              View
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

interface MealCardProps {
  type: 'breakfast' | 'lunch' | 'dinner';
  details: string;
}

const MealCard: React.FC<MealCardProps> = ({ type, details }) => {
  const icons = {
    breakfast: '🌅',
    lunch: '☀️',
    dinner: '🌙'
  };

  const colors = {
    breakfast: 'bg-yellow-50 border-yellow-200',
    lunch: 'bg-orange-50 border-orange-200',
    dinner: 'bg-purple-50 border-purple-200'
  };

  return (
    <Card className={`${colors[type]} border`}>
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{icons[type]}</span>
          <span className="font-medium text-gray-800 capitalize">{type}</span>
        </div>
        <p className="text-sm text-gray-600">{details}</p>
      </CardContent>
    </Card>
  );
};

interface AccommodationCardProps {
  details: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ details }) => {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Bed className="h-4 w-4 text-blue-600" />
          <span className="font-medium text-gray-800">Stay</span>
        </div>
        <p className="text-gray-600">{details}</p>
      </CardContent>
    </Card>
  );
};

interface BudgetBreakdownProps {
  budgetBreakdown: {
    accommodation: string;
    food: string;
    transport: string;
    activities: string;
    total: string;
  };
}

const BudgetBreakdown: React.FC<BudgetBreakdownProps> = ({ budgetBreakdown }) => {
  const categories = [
    { key: 'accommodation', label: 'Accommodation', icon: '🏨' },
    { key: 'food', label: 'Food', icon: '🍽️' },
    { key: 'transport', label: 'Transport', icon: '🚗' },
    { key: 'activities', label: 'Activities', icon: '🎯' }
  ];

  return (
    <Card className="bg-green-50 border-green-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-green-800 flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Budget Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {categories.map((category) => (
            <div key={category.key} className="text-center">
              <div className="text-2xl mb-1">{category.icon}</div>
              <div className="text-sm font-medium text-gray-600">{category.label}</div>
              <div className="text-sm font-semibold text-gray-800">
                {budgetBreakdown[category.key as keyof typeof budgetBreakdown]}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-green-300 pt-4 text-center">
          <div className="text-lg font-bold text-green-800">
            Total: {budgetBreakdown.total}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface TipsSectionProps {
  tips: string[];
}

const TipsSection: React.FC<TipsSectionProps> = ({ tips }) => {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-blue-800 flex items-center gap-2">
          💡 Travel Tips
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

