import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ label = "Hi", ...props }) => (
  <button className="rounded px-4 py-2" {...props}>
    {label}
  </button>
);
