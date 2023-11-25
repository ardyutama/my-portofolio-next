import { motion, Variants } from 'framer-motion';
import Circle2 from '@/images/circle-radial.png';
import Image from 'next/image';

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
};

export const SectionRevealer = ({
  className,
  children,
  id,
  ...props
}: {
  className: string;
  id ?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.section
      className={`relative ${className}`}
      variants={variants}
      initial='hidden'
      whileInView='onscreen'
      viewport={{ once: true }}
      id={id}
      {...props}
    >
      <motion.div
        className='absolute -left-32 -top-20 -z-10 overflow-visible'
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 2 }}
        viewport={{ once: true }}
      >
        <Image src={Circle2} alt='circle2' />
      </motion.div>
      {children}
    </motion.section>
  );
};
