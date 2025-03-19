import React, { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  leftIcon: ReactNode;
  containerClass: string;
}

const Button = ({ id, title, leftIcon, containerClass }: Props) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-left ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
