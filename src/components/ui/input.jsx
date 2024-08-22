import React from "react";
import { twMerge } from "tailwind-merge";
const Input = ({ type, palceholder, className }) => {
  return (
    <input
      type={type}
      palceholder={palceholder}
      className={twMerge(
        "placeholder-white bg-purple-400 rounded-full outline-none px-2 py-1",
        className
      )}
    />
  );
};

export default Input;
