
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 sm:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight animate-fadeIn">
            Build Beautiful Simple Websites <br className="hidden md:block" />
            <span className="text-coral-600">Faster Than Ever</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Create stunning, responsive websites with clean design and powerful features
            that will help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <a href="#features" className="btn-primary">
              Explore Features
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
