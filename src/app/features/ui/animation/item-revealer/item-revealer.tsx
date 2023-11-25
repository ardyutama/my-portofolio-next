import { Variants, motion } from 'framer-motion';

const variants: Variants = {
  offscreen: { opacity: 0, x: -10 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
};

export const ItemRevealerInView = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={variants}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 1 }}
    >
      {children}
    </motion.div>
  );
};
