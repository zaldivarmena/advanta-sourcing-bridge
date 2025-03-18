
import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';

interface AnimatedTransitionProps {
  children: React.ReactNode;
  className?: string;
  type?: 'fade' | 'slide' | 'blur' | 'scale';
  duration?: number;
  delay?: number;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  children,
  className,
  type = 'fade',
  duration = 500,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  const animationClasses = {
    fade: 'animate-fade-in',
    slide: 'animate-fade-in-up',
    blur: 'animate-blur-in',
    scale: 'animate-scale-in',
  };
  
  useEffect(() => {
    // Reset animation on route change
    if (ref.current) {
      ref.current.style.opacity = '0';
      
      const timer = setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.animation = 'none';
          setTimeout(() => {
            if (ref.current) {
              ref.current.style.animation = '';
            }
          }, 50);
        }
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, delay]);
  
  return (
    <div
      ref={ref}
      className={cn(animationClasses[type], className)}
      style={{ 
        animationDuration: `${duration}ms`,
        animationDelay: delay > 0 ? `${delay}ms` : undefined,
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
