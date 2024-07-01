'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { openSans } from '../font';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function OurStory() {
  return (
    <div className="story-container">
      <div className="story-grid">
        <div className="story-text-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
          >
            <h2 className={`story-title ${openSans.className}`}>
              Uncover Our Story
            </h2>
            <p className={`story-text ${openSans.className}`}>
              At Zyngate, we understand the frustrations of job hunting—endless applications, long waits, and the challenge of standing out. That's why we developed AutoApplys, an AI-powered tool designed to simplify the job search process. Our mission is to take the burden off job seekers, allowing you to focus on what truly matters—preparing for interviews and finding the right career path.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          className="story-image-container"
          viewport={{ once: true }}
        >
          <Image
            alt="a man being frustrated"
            src="/frustratedImg.png"
            width={500}
            height={400}
            className="story-image"
          />
        </motion.div>
      </div>
    </div>
  );
}
