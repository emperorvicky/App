'use client'
import { motion } from 'framer-motion';
import { IoMdCheckmark, IoIosClose } from 'react-icons/io';
import { openSans } from '../font';
import { useState } from 'react';

const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    features: [
      { text: 'Resume Creation', available: true },
      { text: 'Cover Letter creation', available: true },
      { text: 'Auto Application', available: false },
    ],
  },
  {
    name: 'Student Plan',
    price: '$10',
    features: [
      { text: 'Resume Creation', available: true },
      { text: 'Cover Letter creation', available: true },
      { text: 'Auto Application (2 times daily)', available: true },
    ],
  },
  {
    name: 'Pro Power Plan',
    price: '$20',
    features: [
      { text: 'Resume Creation', available: true },
      { text: 'Cover Letter creation', available: true },
      { text: 'Auto Application (3 times daily)', available: true },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.2, delayChildren: 0.04 * i },
  }),
};

const item = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div>
      <h2 className={`${openSans.className} font-extrabold text-xl md:text-3xl text-center mt-[5%]`}>
        Our Subscription Plan
      </h2>
      <motion.div
        className="Pricing-container"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="Pricing-plan"
            variants={item}
          >
            <h3 className={`${openSans.className} Pricing-plan-title`}>
              {plan.name}
            </h3>
            <div className="Pricing-plan-price">
              <p className={`${openSans.className} Pricing-plan-price-text`}>{plan.price}</p>
              <p className="Pricing-plan-price-unit">/mo</p>
            </div>
            <div className="Pricing-plan-subscribe">
              <a className="Pricing-plan-subscribe-button">
                Subscribe
              </a>
            </div>
            <div className="Pricing-plan-divider"></div>
            {plan.features.map((feature, idx) => (
              <div className="Pricing-plan-feature" key={idx}>
                <div className="Pricing-plan-feature-icon">
                  {feature.available ? <IoMdCheckmark size={15} /> : <IoIosClose className={`${!feature.available ? ' text-gray-400' : ''}`} size={15} />}
                </div>
                <p className={`${openSans.className} ${!feature.available ? 'Pricing-plan-feature-unavailable' : ''}`}>
                  {feature.text}
                </p>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
