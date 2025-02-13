"use client";

import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  className?: string;
}

const Input = <T extends FieldValues>({
  name,
  type = "text",
  placeholder,
  register,
  error,
  className,
}: InputProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={twMerge(
          clsx(
            "bg-transparent border-b border-border placeholder:text-dark p-4 text-lg outline-none duration-300 focus:border-b-2 focus:border-b-dark",
            error && "border-red-500",
            className
          )
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
