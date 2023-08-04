import clsx from "clsx";
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-[#c9a246] rounded-md px-6 py-3 hover:bg-[#a3802c]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
