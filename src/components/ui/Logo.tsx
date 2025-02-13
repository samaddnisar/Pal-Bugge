import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
  size?: number;
  priority?: boolean;
}

const Logo: FC<LogoProps> = ({ className, size = 100, priority = false }) => {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      className={twMerge(className)}
      width={size}
      height={size}
      priority={priority}
    />
  );
};

export default Logo;
