
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AISearch from '../components/Suppliers/AISearch';
import SupplierList from '../components/Suppliers/SupplierList';
import AnimatedTransition from '../components/UI/AnimatedTransition';

const Suppliers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedTransition>
            <h1 className="heading-2 mb-6">Supplier Discovery</h1>
          </AnimatedTransition>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-3">
              <AnimatedTransition delay={200}>
                <AISearch />
              </AnimatedTransition>
            </div>
          </div>
          
          <AnimatedTransition delay={400}>
            <SupplierList />
          </AnimatedTransition>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Suppliers;
