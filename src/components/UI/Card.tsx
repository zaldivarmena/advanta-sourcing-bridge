
import React from 'react';
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({
  className,
  variant = 'default',
  children,
  onClick,
  animate = false,
  ...props
}) => {
  const baseClasses = "rounded-xl overflow-hidden";
  
  const variantClasses = {
    default: "bg-card text-card-foreground",
    glass: "glass-card",
    elevated: "bg-card text-card-foreground shadow-elevated",
    outline: "bg-transparent border border-border"
  };
  
  const animationClasses = animate ? "transition-all duration-300 hover:shadow-apple hover:translate-y-[-2px]" : "";
  const interactiveClasses = onClick ? "cursor-pointer" : "";
  
  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        animationClasses,
        interactiveClasses,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => (
  <div className={cn("p-6", className)}>
    {children}
  </div>
);

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => (
  <h3 className={cn("text-lg font-medium", className)}>
    {children}
  </h3>
);

export const CardDescription: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => (
  <p className={cn("text-sm text-muted-foreground mt-1", className)}>
    {children}
  </p>
);

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => (
  <div className={cn("p-6 pt-0", className)}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ className?: string; children: React.ReactNode }> = ({ 
  className, 
  children 
}) => (
  <div className={cn("p-6 pt-0 flex items-center", className)}>
    {children}
  </div>
);

export default Card;
