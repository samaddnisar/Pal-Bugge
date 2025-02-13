"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Paragraph component with a fade and slide-up animation when it comes into view.
 */
const Paragraph = ({
  children,
  className = "",
}: ParagraphProps): JSX.Element => {
  return (
    <motion.p
      className={twMerge(
        "text-base md:leading-5 md:text-lg leading-tight text-dark",
        className
      )}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "backOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
