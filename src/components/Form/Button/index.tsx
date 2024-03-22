import clsx from "clsx";
import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-[#bc46c9] rounded-md px-6 py-3 hover:bg-[#872d91]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
