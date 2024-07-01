'use client'
import { motion } from 'framer-motion';
import { openSans } from '../font';
import { AiOutlineRobot } from 'react-icons/ai';
import { IoMdTime, IoMdPerson } from 'react-icons/io';
import { FaFileAlt, FaLaptop } from 'react-icons/fa';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Section1 = () => {
  return (
    <div className="Section1-container">
      <h2 className={`Section1-title ${openSans.className}`}>
        Why Choose AutoApplys by Zyngate
      </h2>
      <div className="Section1-grid">
        {[
          { icon: <FaFileAlt size={40} />, title: 'Automated Job Application', subtitle: 'Create a Professional Resume Effortlessly', description: 'Use our intuitive resume builder to create a standout resume. Whether you\'re starting from scratch or updating your existing resume, our tool guides you every step of the way.' },
          { icon: <IoMdTime size={40} />, title: 'Save Time and Effort', subtitle: 'Focus on What Matters', description: 'No more time-consuming applications. Let us handle it for you, so you can concentrate on preparing for interviews and building your network.' },
          { icon: <IoMdPerson size={40} />, title: 'Tailored Job Matches', subtitle: 'Personalized Opportunities', description: 'Get matched with job opportunities that align perfectly with your skills and career goals. Based on your preferences, our AI identifies the best fits just for you.' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="Section1-card"
          >
            <div className="Section1-icon-container">
              {item.icon}
            </div>
            <h2 className={`Section1-card-title ${openSans.className}`}>{item.title}</h2>
            <h3 className={`Section1-card-subtitle ${openSans.className}`}>{item.subtitle}</h3>
            <p className={`Section1-card-description ${openSans.className}`}>{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="Section1-extra-cards-container">
        {[
          { icon: <AiOutlineRobot size={40} />, title: 'Automated Job Application', subtitle: 'AI-Driven Efficiency', description: 'Experience the power of AI with AutoApplys. Our technology automates the job application process, ensuring your resume reaches the best opportunities seamlessly.' },
          { icon: <FaLaptop size={40} />, title: 'Seamless User Experience', subtitle: 'Effortless Navigation', description: 'Navigate your job search with ease using our intuitive interface. Track your applications and progress from a single, user-friendly dashboard.' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="Section1-extra-card"
          >
            <div className="Section1-icon-container">
              {item.icon}
            </div>
            <h2 className={`Section1-card-title ${openSans.className}`}>{item.title}</h2>
            <h3 className={`Section1-card-subtitle ${openSans.className}`}>{item.subtitle}</h3>
            <p className={`Section1-card-description ${openSans.className}`}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
