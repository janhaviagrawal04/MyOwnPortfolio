import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HorizontalScrollingText = ({ text, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div className="w-full h-10 overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`whitespace-nowrap ${className}`}
            style={{ display: 'inline-flex' }}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10, 
                ease: "linear",
              },
              transitionEnd: { x: "100%" },
              repeatDelay: 0.08 
            }}
          >
            <span>
              {text}&nbsp;
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HorizontalScrollingText;
