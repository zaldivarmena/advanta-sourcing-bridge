
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import AnimatedTransition from '../components/UI/AnimatedTransition';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatedTransition>
          <Hero />
        </AnimatedTransition>
        
        <AnimatedTransition>
          <Features />
        </AnimatedTransition>
        
        <AnimatedTransition>
          <section className="py-20">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="heading-2 mb-4">Ready to Transform Your<br />Supplier Management?</h2>
              <p className="subheading max-w-2xl mx-auto mb-8">
                Join the growing number of businesses using ADVANTA to discover, 
                manage, and optimize their supplier relationships.
              </p>
              <a 
                href="/dashboard" 
                className="inline-flex items-center justify-center rounded-lg font-medium transition-all bg-primary text-primary-foreground hover:opacity-90 shadow-subtle text-base px-5 py-2.5"
              >
                Get Started
              </a>
            </div>
          </section>
        </AnimatedTransition>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
