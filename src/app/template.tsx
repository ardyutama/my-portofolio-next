'use client';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
};
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      variants={variants}
      initial='hidden'
      animate='enter'
      transition={{ type: 'tween', duration: 1 }}
    >
      {children}
    </motion.main>
  );
}
