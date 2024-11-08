/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OverlayCopy = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
    >
      {children}
    </motion.div>
  );
};

export default OverlayCopy;