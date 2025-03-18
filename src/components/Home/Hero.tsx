
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import AnimatedTransition from '../UI/AnimatedTransition';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-[70%] -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-advanta-300/10 to-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-12">
            <AnimatedTransition type="fade" delay={200}>
              <span className="bg-accent/50 text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                Revolutionizing Supplier Management
              </span>
            </AnimatedTransition>
            
            <AnimatedTransition type="slide" delay={400}>
              <h1 className="heading-1 mt-6 mb-4">
                AI-Powered Supplier <span className="text-primary">Discovery</span> & Management
              </h1>
            </AnimatedTransition>
            
            <AnimatedTransition type="slide" delay={600}>
              <p className="subheading mb-8 md:pr-12">
                ADVANTA bridges the gap between finding new suppliers and managing existing relationships, 
                improving efficiency, reducing costs, and mitigating risks.
              </p>
            </AnimatedTransition>
            
            <AnimatedTransition type="scale" delay={800}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  <Link to="/dashboard">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/suppliers">Find Suppliers</Link>
                </Button>
              </div>
            </AnimatedTransition>
          </div>
          
          <div className="flex-1 mt-12 md:mt-0">
            <AnimatedTransition type="blur" delay={1000}>
              <div className="relative">
                <div className="glass-card p-4 shadow-apple animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1598065852271-e72c36ac3ea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Supplier Discovery Dashboard" 
                    className="rounded-lg shadow-sm"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 glass-card p-4 shadow-apple animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center p-2 bg-white/80 dark:bg-black/30 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Supplier Match Found</p>
                      <p className="text-xs text-muted-foreground">94% compatibility score</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 glass-card p-4 shadow-apple animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="flex items-center p-2 bg-white/80 dark:bg-black/30 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">AI Analysis</p>
                      <p className="text-xs text-muted-foreground">Scanning 100+ sources</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedTransition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
