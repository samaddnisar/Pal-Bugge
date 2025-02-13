import { twMerge } from "tailwind-merge";
import React from "react";

const Hamburger = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div role="button" className={twMerge("", props.className)} {...props}>
      |||
    </div>
  );
};

export default Hamburger;
