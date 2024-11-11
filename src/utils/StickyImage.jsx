/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StickyImage = ({ background, padding }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${padding * 2}px)`,
        top: padding,
        scale,
      }}
      ref={targetRef}
      className={`sticky z-0 overflow-hidden rounded-3xl`}
    >
      <motion.div
        className='absolute inset-0 bg-neutral-950/70'
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

export default StickyImage;
