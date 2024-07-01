'use client'
import { motion } from 'framer-motion';
import { FaUser, FaRegLightbulb, FaRobot, FaChartLine, FaCog } from 'react-icons/fa';
import { openSans } from '../font';

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      type: 'spring',
      stiffness: 70,
    },
  }),
};

const ProcessMap = () => {
  const steps = [
    {
      icon: <FaUser size={40} />,
      title: 'Step 1: Create Your Profile',
      subtitle: 'Start with Your Profile',
      description: 'Upload your resume or link your LinkedIn profile to get started. AutoApplys will gather your professional information to create a comprehensive profile that forms the base for personalized job applications.',
      points: [
        'Upload Resume: Quickly upload your resume or import LinkedIn data.',
        'Optimize Profile: Ensure your profile highlights your skills and experiences.',
        'Ready for Matching: Prepare for seamless integration with our AI.',
      ],
    },
    {
      icon: <FaCog size={40} />,
      title: 'Step 2: Set Preferences',
      subtitle: 'Define Your Preferences',
      description: 'Choose your desired job title, preferred locations, salary range, and other criteria. This step customizes your job search to align with your career goals and personal needs.',
      points: [
        'Job Titles: Specify titles that fit your expertise.',
        'Locations: Select your preferred job locations.',
        'Salary Expectations: Set your expected salary range.',
        'Additional Filters: Apply other job-related filters.',
      ],
    },
    {
      icon: <FaRegLightbulb size={40} />,
      title: 'Step 3: Get AI Matches',
      subtitle: 'AI-Powered Job Matching',
      description: 'Our AI scans job postings to find the best matches for your profile and preferences. Enjoy real-time updates and precise matches that increase your chances of landing interviews.',
      points: [
        'Intelligent Matching: Connect with relevant job opportunities.',
        'Real-Time Alerts: Stay informed about new matches.',
        'High Accuracy: Get precise job matches tailored to you.',
      ],
    },
    {
      icon: <FaRobot size={40} />,
      title: 'Step 4: Automated Applications',
      subtitle: 'Automate Your Applications',
      description: 'AutoApplys creates unique cover letters and optimizes your resume for each job. It then automatically submits these applications, saving you time and enhancing your job search success.',
      points: [
        'Custom Cover Letters: Generate job-specific cover letters.',
        'Keyword Optimization: Tailor resumes with essential keywords.',
        'Auto Submission: Submit applications without manual effort.',
      ],
    },
    {
      icon: <FaChartLine size={40} />,
      title: 'Step 5: Track Success',
      subtitle: 'Monitor Your Progress',
      description: 'Use our tracking dashboard to keep tabs on your applications. See responses, analyze your success, and stay organized throughout your job search.',
      points: [
        'Application Tracking: Follow the status of your applications.',
        'Response Management: View and manage employer replies.',
        'Success Insights: Analyze your application performance.',
        'Easy Dashboard: Stay organized with a user-friendly interface.',
      ],
    },
  ];

  return (
    <div className="ProcessMap-container">
      <h2 className={`ProcessMap-title ${openSans.className}`}>
        Our Process
      </h2>
      <div className="ProcessMap-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={stepVariants}
            className="ProcessMap-step"
          >
            <div className="ProcessMap-icon-container">
              {step.icon}
            </div>
            <h3 className={`ProcessMap-step-title ${openSans.className}`}>{step.title}</h3>
            <h4 className={`ProcessMap-step-subtitle ${openSans.className}`}>{step.subtitle}</h4>
            <p className={`ProcessMap-step-description ${openSans.className}`}>{step.description}</p>
            <ul className={`ProcessMap-step-points ${openSans.className}`}>
              {step.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessMap;
