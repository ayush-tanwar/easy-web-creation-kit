
import React from 'react';

const testimonials = [
  {
    quote: "This website tool made creating our company site incredibly easy. We launched in half the time we expected!",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp"
  },
  {
    quote: "I had no coding experience, but I was still able to build a professional-looking website that my clients love.",
    author: "Michael Chen",
    role: "Freelance Photographer",
    company: "Chen Studios"
  },
  {
    quote: "The responsive design is flawless. Our website looks amazing on everything from phones to large desktop screens.",
    author: "Jessica Williams",
    role: "Small Business Owner",
    company: "Coastal Crafts"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="section-subheading">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card flex flex-col"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400 mb-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
              </div>
              <div className="mt-auto">
                <p className="font-semibold text-blue-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
