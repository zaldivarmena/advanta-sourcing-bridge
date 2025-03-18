
import React from 'react';
import { Search, BarChart3, ShieldCheck, Zap, Clock, Users } from 'lucide-react';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '../UI/Card';
import AnimatedTransition from '../UI/AnimatedTransition';

const features = [
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: 'AI-Powered Discovery',
    description: 'Automatically find suppliers that match your exact requirements using our advanced AI algorithms.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: 'Performance Analytics',
    description: 'Track and analyze supplier performance with detailed metrics and customizable dashboards.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: 'Risk Mitigation',
    description: 'Identify and address potential risks in your supply chain before they become problems.'
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Process Efficiency',
    description: 'Streamline your entire supplier management workflow with automated processes.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Real-time Updates',
    description: 'Get instant notifications about important changes in your supplier relationships.'
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Relationship Management',
    description: 'Build stronger, more collaborative relationships with your suppliers through structured communication.'
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <AnimatedTransition type="fade">
            <h2 className="heading-2 mb-4">Powerful Features to Transform<br />Your Supply Chain</h2>
            <p className="subheading max-w-2xl mx-auto">
              ADVANTA combines cutting-edge AI technology with robust supplier management tools 
              to give you complete control over your supplier relationships.
            </p>
          </AnimatedTransition>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedTransition key={index} type="scale" delay={index * 100}>
              <Card variant="glass" animate className="h-full">
                <CardHeader>
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedTransition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
