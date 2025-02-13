"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Heading component with a fade and slide-in animation.
 *
 * This component maps the specified HTML heading tag to its corresponding
 * Motion element so that the animation can be applied.
 */
const Heading = ({
  children,
  className = "",
  as: Tag = "h1",
}: HeadingProps) => {
  let MotionTag;
  switch (Tag) {
    case "h1":
      MotionTag = motion.h1;
      break;
    case "h2":
      MotionTag = motion.h2;
      break;
    case "h3":
      MotionTag = motion.h3;
      break;
    case "h4":
      MotionTag = motion.h4;
      break;
    case "h5":
      MotionTag = motion.h5;
      break;
    case "h6":
      MotionTag = motion.h6;
      break;
    default:
      MotionTag = motion.h1;
  }

  return (
    <MotionTag
      className={twMerge(
        "text-light text-4xl md:text-6xl uppercase",
        className
      )}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "backOut" }}
    >
      {children}
    </MotionTag>
  );
};

export default Heading;
