import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

interface PreferenceButtonProps {
  value: string;
  label: string;
  emoji?: string;
  onClick: (value: string) => void;
  isSelected?: boolean;
  className?: string;
}

export const PreferenceButton: React.FC<PreferenceButtonProps> = ({
  value,
  label,
  emoji,
  onClick,
  isSelected = false,
  className = ''
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Button
        variant={isSelected ? "default" : "outline"}
        onClick={() => onClick(value)}
        className={`
          w-full h-12 px-4 py-2
          ${isSelected 
            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500' 
            : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:text-orange-600'
          }
          transition-all duration-200
          ${className}
        `}
      >
        <div className="flex items-center justify-center gap-2">
          {emoji && <span className="text-lg">{emoji}</span>}
          <span className="text-sm font-medium">{label}</span>
        </div>
      </Button>
    </motion.div>
  );
};

interface PreferenceButtonGridProps {
  options: Array<{ value: string; label: string; emoji?: string }>;
  onSelect: (value: string) => void;
  selectedValue?: string;
  className?: string;
}

export const PreferenceButtonGrid: React.FC<PreferenceButtonGridProps> = ({
  options,
  onSelect,
  selectedValue,
  className = ''
}) => {
  return (
    <div className={`space-y-2 mt-4 ${className}`}>
      {options.map((option) => (
        <PreferenceButton
          key={option.value}
          value={option.value}
          label={option.label}
          emoji={option.emoji}
          onClick={onSelect}
          isSelected={selectedValue === option.value}
          className="w-full"
        />
      ))}
    </div>
  );
};
