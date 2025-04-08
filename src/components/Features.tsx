
import React from 'react';
import { Smartphone, Code, Shield, Zap, Layers, Users } from 'lucide-react';

const featuresList = [
  {
    icon: <Smartphone className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Responsive Design',
    description: 'Looks great on any device, from mobile phones to desktop monitors.'
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed to provide the best user experience possible.'
  },
  {
    icon: <Code className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Clean Code',
    description: 'Built with modern HTML and CSS standards for exceptional performance.'
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Secure',
    description: 'Implemented with security best practices to keep your data safe.'
  },
  {
    icon: <Layers className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'Modular Design',
    description: 'Easily customize components to fit your specific needs.'
  },
  {
    icon: <Users className="w-10 h-10 text-blue-600 mb-4" />,
    title: 'User-Focused',
    description: 'Designed with the user experience as the top priority.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Powerful Features</h2>
          <p className="section-subheading">
            Everything you need to create amazing websites without any technical knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
