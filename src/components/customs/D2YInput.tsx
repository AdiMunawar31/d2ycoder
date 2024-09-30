import React from "react";
import { Input } from "../ui/input";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
}

const D2YInput: React.FC<InputProps> = ({
  value = "",
  onChange,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={`border rounded w-full py-2 px-3 text-grey-darker focus:ring-2 focus:ring-purple-600 focus:outline-none ${className}`}
    />
  );
};

export default D2YInput;
