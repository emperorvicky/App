'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaCircle, FaRegCircle, FaStar } from 'react-icons/fa';
import { openSans } from '../font';

const testimonials = [
  {
    name: 'Sara K.',
    title: 'Marketing Specialist',
    feedback: 'AutoApplys transformed my job search. I found my dream job without the usual hassle.',
    image: '/people/sara.png',
    rating: 5
  },
  {
    name: 'Jane S.',
    title: 'Data Scientist',
    feedback: 'This tool saved me hours. The AI found perfect matches, and the automated applications worked flawlessly.',
    image: '/people/jane.png',
    rating: 4
  },
  {
    name: 'John T.',
    title: 'Product Manager',
    feedback: 'The resume builder was intuitive and easy to use. I quickly created a professional resume that stood out to employers.',
    image: '/people/john.png',
    rating: 5
  },
];

const dotVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: { opacity: 1, scale: 1.2 },
};

export default function Section4() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="section4-container">
      <h2 className={`${openSans.className} section4-heading`}>
        Testimonials
      </h2>
      <div className="section4-wrapper">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`testimonial-item ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
          >
            <div className="testimonial-content">
              <div className='flex w-full'>
                <FaQuoteRight size={80} className="testimonial-quote" />
                <FaQuoteRight size={120} className="testimonial-quote-large" />
                <div className='ml-4'>
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <p className={`${openSans.className} testimonial-feedback`}>
                    {testimonial.feedback}
                  </p>
                  <h2 className={`${openSans.className} testimonial-name`}>
                    {testimonial.name}
                  </h2>
                  <h3 className={`${openSans.className} testimonial-title`}>
                    {testimonial.title}
                  </h3>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <FaStar key={i + testimonial.rating} className="text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="testimonial-button-container">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className="testimonial-button"
            variants={dotVariants}
            initial="initial"
            animate={index === currentIndex ? "animate" : "initial"}
          >
            {index === currentIndex ? <FaCircle className="testimonial-button-active" /> : <FaRegCircle className="testimonial-button-inactive" />}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
