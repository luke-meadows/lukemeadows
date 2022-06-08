import styled from 'styled-components';
import { motion } from 'framer-motion';
export default function PageTransitionDiv({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {children}
    </motion.div>
  );
}
