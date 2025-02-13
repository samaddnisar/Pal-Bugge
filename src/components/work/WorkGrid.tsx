"use client";

import { motion } from "motion/react";
import Work from "./Work";
import workData from "@/data/work.json";
import { twMerge } from "tailwind-merge";

// Parent container variants with staggerChildren
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // adjust the delay between children animations as needed
    },
  },
};

// Child variants for each work item
const childVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "backOut" } },
};

const WorkGrid = (): JSX.Element => {
  return (
    <section id="work">
      <motion.ul
        className={twMerge("grid grid-cols-1 md:grid-cols-2 gap-8 mt-48")}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {workData.map((work) => (
          <motion.li key={work.title} variants={childVariants}>
            <Work title={work.title} image={work.image} link={work.link} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default WorkGrid;
