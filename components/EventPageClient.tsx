"use client"

import { useState, useEffect } from "react"
import { Mail, Share2 } from "lucide-react"

// Animated Counter Component
export function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (value < count) {
      setCount(0);
    }
    
    const duration = 1000; 
    const steps = 60; 
    const increment = (value - count) / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(prevCount => {
          const nextCount = prevCount + increment;
          return nextCount > value ? value : nextCount;
        });
        currentStep++;
      } else {
        setCount(value); 
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-sm font-medium tabular-nums">
      {Math.round(count)}
    </span>
  );
}

export function AnimatedParticipants({ value, max, registrationOpen }: { value: number; max: number; registrationOpen: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value < count) setCount(0);

    const duration = 1000;
    const steps = 60;
    const start = count;
    const diff = value - start;
    const increment = diff / steps;

    let current = 0;
    const timer = setInterval(() => {
      current++;
      setCount(prev => {
        const next = Math.round(prev + increment);
        if (current >= steps) return value;
        return next > value ? value : next;
      });
      if (current >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const percent = Math.max(0, Math.min(100, (count / Math.max(1, max)) * 100));

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Participants</span>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium tabular-nums">{count}</span>
          <span className="text-sm font-medium">/{max}</span>
        </div>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {registrationOpen && count < max && (
        <p className="text-xs text-muted-foreground mt-1">
          {Math.max(0, max - count)} spots remaining
        </p>
      )}
    </div>
  );
}

export function ShareIcons() {
  return (
    <div className="flex gap-3 text-gray-500">
      <a href="#" aria-label="Share on Facebook"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-blue-600">f</div></a>
      <a href="#" aria-label="Share on X (Twitter)"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-blue-400">X</div></a>
      <a href="#" aria-label="Share on LinkedIn"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-blue-700">in</div></a>
      <a href="#" aria-label="Share via Email"><div className="w-8 h-8 flex items-center justify-center border rounded-full hover:text-red-500"><Mail className="h-4 w-4" /></div></a>
    </div>
  );
}
