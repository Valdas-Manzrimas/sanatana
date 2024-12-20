import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useMotionTemplate, motion } from 'framer-motion';
import { ColorContext } from '../context/ColorContext';
import OverlayCopy from '../utils/OverlayCopy';

export const HeroSection = () => {
  const color = useContext(ColorContext);

  const backgroundImage = useMotionTemplate`
  radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color} 100%)
`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className='relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200'
    >
      <OverlayCopy>
        <div className='relative z-10 flex flex-col items-center'>
          <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight'>
            Are you ready for worlds consciousness shift?
          </h1>
          <p className='my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
            distinctio eum impedit nihil ipsum modi.
          </p>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className='group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50'
          >
            Start free trial
            <FiArrowRight className='transition-transform group-hover:-rotate-45 group-active:-rotate-12' />
          </motion.button>
        </div>
      </OverlayCopy>
      <div className='absolute inset-0 z-0'>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

//export default HeroSection
