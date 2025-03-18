
import React from 'react';
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  return (
    <div className={cn("font-display font-bold flex items-center", sizeClasses[size], className)}>
      {variant === 'default' && (
        <div className="mr-2 bg-primary text-primary-foreground rounded-md w-8 h-8 flex items-center justify-center">
          A
        </div>
      )}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-advanta-600">
        ADVANTA
      </span>
    </div>
  );
};

export default Logo;
