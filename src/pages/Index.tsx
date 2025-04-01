
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CACCalculator from "@/components/CACCalculator";
import CACSummary from "@/components/CACSummary";
import SeoContent from "@/components/SeoContent";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-brand-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary to-brand-primary/90 text-white pt-16 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Calculate Your True Customer Acquisition Cost
                </h1>
                <p className="text-xl text-white/90">
                  Make data-driven decisions with our interactive CAC calculator designed 
                  specifically for SaaS businesses and paid advertising campaigns.
                </p>
                <a 
                  href="#calculator" 
                  className="inline-block btn-accent"
                >
                  Try The Calculator Now
                </a>
              </div>
              <div className="lg:flex justify-end hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="CAC Calculator Illustration" 
                  className="max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section id="calculator" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl space-y-8">
            <CACSummary />
            <CACCalculator />
          </div>
        </section>
        
        {/* SEO Content Section */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SeoContent />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
