// src/components/TypewriterText.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // Speed in milliseconds per character, default to 100
  delay?: number; // Delay in milliseconds before re-typing, default to 1000
  loop?: boolean; // Whether the animation should loop, default to false
  className?: string; // Tailwind CSS classes for styling
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 100, delay = 1000, loop = false, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      // Still typing
      const typingTimeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(typingTimeout);
    } else if (loop) {
      // Typing complete and loop is true, so reset after a delay
      const loopTimeout = setTimeout(() => {
        setDisplayedText(''); // Clear text
        setCurrentIndex(0); // Reset index
      }, delay);
      return () => clearTimeout(loopTimeout);
    }
  }, [currentIndex, text, speed, delay, loop]); // Dependencies for useEffect

  return (
    <span className={className}>
      {displayedText}
    </span>
  );
};

export default TypewriterText;
