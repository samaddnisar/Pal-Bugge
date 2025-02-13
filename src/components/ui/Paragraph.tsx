import { twMerge } from "tailwind-merge";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({
  children,
  className = "",
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={twMerge(
        "text-base  md:leading-5 md:text-lg leading-tight text-dark",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
