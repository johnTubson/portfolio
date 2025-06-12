import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type FC } from "react";

interface CarouselModalProps {
  data: {
    startIndex: number;
    images: string[];
  };
  closeModal: () => void;
}

export const CarouselModal: FC<CarouselModalProps> = ({ data, closeModal }) => {
  const { images, startIndex } = data;
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToPrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  const goToNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        carouselRef.current &&
        !carouselRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4'
    >
      <div className='w-full h-auto' ref={carouselRef}>
        <button
          onClick={closeModal}
          className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full h-10 w-10 flex items-center justify-center text-2xl z-20'
        >
          <span className='m-0 p-0 self-center'>&times;</span>
        </button>

        <div
          className='relative w-full h-full flex items-center justify-center'
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <button
            onClick={goToPrevious}
            className='absolute left-2 md:left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white rounded-full h-12 w-12 flex items-center justify-center text-3xl z-20'
          >
            <span className='m-0 p-0 h-full self-center justify-self-center'>
              &#8249;
            </span>
          </button>

          <AnimatePresence mode='wait'>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Architecture Diagram ${currentIndex + 1}`}
              className='max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl'
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          <button
            onClick={goToNext}
            className='absolute right-2 md:right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white rounded-full h-12 w-12 flex items-center justify-center text-3xl z-20'
          >
            &#8250;
          </button>

          <div className='absolute bottom-4 text-white bg-black/50 rounded-full px-4 py-1 text-sm'>
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
