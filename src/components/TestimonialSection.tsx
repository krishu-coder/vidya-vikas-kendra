
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Patel",
    role: "Recent Graduate, Ahmedabad",
    content: "The digital marketing course helped me secure a job at a leading agency in Ahmedabad within just two months of completion. The skills I learned are exactly what employers are looking for.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 2,
    name: "Raj Sharma",
    role: "Manufacturing Professional, Surat",
    content: "As someone with 15 years in traditional manufacturing, I was skeptical about new technologies. This platform made the transition to Industry 4.0 smooth and practical.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Small Business Owner, Vadodara",
    content: "The financial literacy course transformed how I manage my small business. I've implemented better systems and seen 30% growth in just six months.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 4,
    name: "Kiran Modi",
    role: "Farmer, Kutch",
    content: "The sustainable agriculture course introduced me to techniques that increased my yield while using less water. The government certification also helps me sell produce at better prices.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gujarat-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gujarat-navy mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600">
            Hear from learners across Gujarat who have transformed their careers and lives through our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white h-full flex flex-col">
              <CardContent className="pt-6 flex-grow flex flex-col">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gujarat-saffron text-gujarat-saffron" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium text-gujarat-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
