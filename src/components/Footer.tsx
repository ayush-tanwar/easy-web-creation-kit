
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Simple<span className="text-coral-500">Site</span></h3>
            <p className="text-blue-200 mb-4">
              Creating beautiful websites has never been easier. Our simple tools help you build 
              the site of your dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-blue-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter for tips and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800" 
              />
              <button 
                type="submit" 
                className="bg-coral-600 hover:bg-coral-700 px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>&copy; {currentYear} SimpleSite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
