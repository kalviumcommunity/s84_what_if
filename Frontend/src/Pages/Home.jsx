import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="landing-container">
      <motion.h1
        className="landing-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to What If...?
      </motion.h1>
      <motion.p
        className="landing-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        A creative space to let your wildest, funniest, and most thought-provoking ideas come to life! Share your random thoughts, engage with like-minded individuals, and explore endless "What If" scenarios.
      </motion.p>
      
      <motion.button
        className="explore-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Start Exploring
      </motion.button>

      <div className="footer-text">
        <motion.p
          className="footer-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          Join the community of dreamers, thinkers, and creators.
        </motion.p>
      </div>
    </div>
  )
}
