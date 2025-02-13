"use client";

import { motion } from "motion/react";
import NavButton from "./NavButton";

/**
 * Variants for the menu animation.
 *
 * - **hidden:** Initial state when the menu is not visible.
 * - **visible:** Animated state when the menu is shown.
 * - **exit:** Final state when the menu is being removed.
 */
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Menu = () => {
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col gap-5 py-4 absolute bg-black w-full"
    >
      <NavButton href="#work" targetPage="/">
        Work
      </NavButton>
      <NavButton href="about">About</NavButton>
      <NavButton href="#contact">Contact</NavButton>
    </motion.div>
  );
};

export default Menu;
