"use client";

import Link from "next/link";
import Logo from "../ui/Logo";
import NavButton from "./NavButton";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Navbar component that renders the main navigation along with a hamburger menu.
 * The hamburger icon rotates 90 degrees when the menu is open, and rotates back to 0 when closed.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex justify-between items-center sticky top-0 bg-black z-10 py-7">
        <div className="hidden md:flex gap-8">
          <NavButton href="#work" targetPage="/">
            Work
          </NavButton>
          <NavButton href="about">About</NavButton>
        </div>
        <Link href="/" className="md:absolute left-1/2 md:-translate-x-1/2">
          <Logo />
        </Link>
        <NavButton href="#contact" className="md:block hidden">
          Contact
        </NavButton>
        {/* Wrap the Hamburger component in a motion.div to animate its rotation */}
        <motion.div
          className="md:hidden block cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Hamburger />
        </motion.div>
      </nav>
      <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
    </>
  );
};

export default Navbar;
