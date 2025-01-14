import React from "react";

interface BTNSelectProps {
  active: boolean;
  onClick: (label: string) => void;
  label: string;
}

function BTNSelect({ active, onClick, label }: BTNSelectProps) {
  return (
    <button
      className={`grow shrink basis-0 text-center text-lg ${
        active
          ? "text-active font-medium pb-1 border-b-2 border-active"
          : "text-text2 font-normal"
      }`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default BTNSelect;
