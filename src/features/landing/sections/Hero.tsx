import { motion } from "framer-motion";
import type { FC } from "react";

interface HeroSectionProps {
  data: {
    name: string;
    tagline: string;
    cta1: string;
    cta2: string;
  };
  navigateTo: (page: string) => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ data, navigateTo }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const taglineWords = data.tagline.split(" ");

  return (
    <div
      id='home'
      className='relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center overflow-hidden mb-12'
    >
      {/* Animated background shapes */}
      <div className='absolute inset-0 z-0'>
        <div
          className='animated-shape top-[2%] left-[2%] md:top-[10%] md:left-[15%]'
          style={{
            width: "150px",
            height: "150px",
            // top: "10%",
            // left: "15%",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className='animated-shape top-[70%] left-[80%] md:top-[70%] md:left-[80%]'
          style={{
            width: "100px",
            height: "100px",
            // top: "70%",
            // left: "80%",
            animationDelay: "2s",
          }}
        ></div>
        <div
          className='animated-shape top-[10%] left-[80%] md:top-[25%] md:left-[70%]'
          style={{
            width: "75px",
            height: "75px",
            // top: "25%",
            // left: "70%",
            animationDelay: "5s",
          }}
        ></div>
        <div
          className='animated-shape top-[80%] left-[10%]'
          style={{
            width: "120px",
            height: "120px",
            // top: "80%",
            // left: "10%",
            animationDelay: "8s",
          }}
        ></div>
      </div>

      <div className='relative z-10 px-4'>
        <motion.h1
          className='text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {data.name}
        </motion.h1>

        <motion.h2
          className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-medium'
          variants={sentence}
          initial='hidden'
          animate='visible'
        >
          {taglineWords.map((word, index) => (
            <motion.span
              key={word + "-" + index}
              variants={letter}
              className='inline-block mr-2'
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          className='flex flex-wrap justify-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <button
            onClick={() => navigateTo("projects")}
            className='glow-on-hover px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105'
          >
            {data.cta1}
          </button>
          <button
            onClick={() => navigateTo("contacts")}
            className='px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105'
          >
            {data.cta2}
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className='absolute bottom-10'
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 2.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1'>
          <div className='w-1 h-2 bg-gray-400 rounded-full'></div>
        </div>
      </motion.div>
    </div>
  );
};
