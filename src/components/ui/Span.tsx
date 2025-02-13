import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SpanProps {
  children: ReactNode;
  className?: string;
}

const Span = ({ children, className }: SpanProps) => {
  return (
    <span className={twMerge("text-light text-xl", className)}>{children}</span>
  );
};

export default Span;
