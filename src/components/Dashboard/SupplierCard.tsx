
import React from 'react';
import { Star, Check, AlertTriangle, MoreHorizontal } from 'lucide-react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../UI/Card';
import Button from '../UI/Button';
import { cn } from '@/lib/utils';

interface SupplierCardProps {
  supplier: {
    id: string;
    name: string;
    category: string;
    logo?: string;
    performance: number;
    status: 'active' | 'pending' | 'issue';
    lastDelivery?: string;
  };
  className?: string;
}

const SupplierCard: React.FC<SupplierCardProps> = ({ supplier, className }) => {
  // Status indicator colors
  const statusColors = {
    active: 'bg-green-500',
    pending: 'bg-amber-500',
    issue: 'bg-red-500'
  };
  
  // Status icons
  const statusIcons = {
    active: <Check className="h-4 w-4 text-green-500" />,
    pending: <AlertTriangle className="h-4 w-4 text-amber-500" />,
    issue: <AlertTriangle className="h-4 w-4 text-red-500" />
  };
  
  // Status labels
  const statusLabels = {
    active: 'Active',
    pending: 'Pending',
    issue: 'Issue'
  };
  
  // Performance color based on score
  const getPerformanceColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-amber-500';
    return 'text-red-500';
  };
  
  return (
    <Card variant="elevated" animate className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            {supplier.logo ? (
              <img
                src={supplier.logo}
                alt={`${supplier.name} logo`}
                className="w-10 h-10 rounded-md object-cover mr-3"
              />
            ) : (
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary font-semibold">
                  {supplier.name.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <CardTitle className="text-base">{supplier.name}</CardTitle>
              <CardDescription>{supplier.category}</CardDescription>
            </div>
          </div>
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${statusColors[supplier.status]} mr-2`} />
            <span className="text-xs text-muted-foreground">{statusLabels[supplier.status]}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-between items-center mb-3">
          <div>
            <span className="text-xs text-muted-foreground">Performance</span>
            <div className={`text-xl font-semibold ${getPerformanceColor(supplier.performance)}`}>
              {supplier.performance}%
            </div>
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.round(supplier.performance / 20)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-muted'
                }`}
              />
            ))}
          </div>
        </div>
        {supplier.lastDelivery && (
          <div className="text-xs text-muted-foreground">
            Last delivery: {supplier.lastDelivery}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        <Button variant="outline" size="sm">View Profile</Button>
        <Button variant="ghost" size="sm" className="p-1">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SupplierCard;
