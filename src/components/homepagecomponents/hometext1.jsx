import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = () => (
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
 style={{'color':'#ffee00ff','fontWeight':'bold',textShadow: '2px 2px 4px #000000'}}>
 Innovations <span style={{'color':'#ffee00ff','fontWeight':'bold'}}>For</span>
  </motion.h1>
);

export default AnimatedText;
