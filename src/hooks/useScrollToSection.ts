"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const useScrollToSection = () => {
  const pathname = usePathname(); // Detect page changes

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const sectionId = window.location.hash.substring(1); // Remove #
      const section = document.getElementById(sectionId);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Add delay to ensure page has fully loaded
      }
    }
  }, [pathname]); // Run this every time the route changes
};

export default useScrollToSection;
