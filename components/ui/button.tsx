// components/ui/button.tsx
"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

/**
 * Minimal replacement for shadcn Button.
 * Accepts className, onClick, disabled etc.
 */
export const Button: React.FC<ButtonProps> = ({ children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={
        "inline-flex items-center justify-center rounded-lg px-4 py-2 transition-shadow focus:outline-none disabled:opacity-60 " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
