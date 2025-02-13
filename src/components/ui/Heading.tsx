import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
  children,
  className = "",
  as: Tag = "h1",
}: HeadingProps) => {
  return (
    <Tag
      className={twMerge(
        "text-light text-4xl md:text-6xl uppercase",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
