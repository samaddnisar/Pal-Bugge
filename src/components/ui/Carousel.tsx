"use client";

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Heading from "./Heading";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="mt-48">
      <div className="flex items-center max-w-3xl mx-auto flex-col gap-4">
        <img src="/images/imdb.avif" alt="IMDb" className="w-16" />
        <Heading className="text-center">
          Framegrabs and stills from Tv-drama series lensed by Haagenrud
        </Heading>
      </div>
      <div className="relative flex items-center justify-center w-full h-[400px] overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Image Wrapper */}
        <div
          {...handlers}
          className="relative flex w-full h-full items-center justify-center"
        >
          {images.map((src, index) => {
            const isActive = index === activeIndex;
            const isLeft =
              index === (activeIndex - 1 + images.length) % images.length;
            const isRight = index === (activeIndex + 1) % images.length;

            return (
              <img
                key={index}
                src={`/images/${src}`}
                alt={`Slide ${index}`}
                className={twMerge(
                  "absolute transition-all duration-500 w-[400px] sm:w-1/2 object-cover rounded-lg",
                  isActive
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-40 scale-90",
                  isLeft && "-translate-x-36",
                  isRight && "translate-x-36"
                )}
              />
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
