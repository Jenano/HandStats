import React from "react";

interface StatItemProps {
  label: string; // nazev statistiky
  value: string | number; // hodnota statistiky
  color: string; //barva statistiky
  bold?: boolean;
}

function StatItem({ label, value, color, bold }: StatItemProps) {
  return (
    <div className="grow shrink basis-0 h-10 border-b border-text2/10 flex justify-between items-center">
      <div
        className={`text-text2 text-base font-normal ${bold ? "font-bold" : "font-normal"}`}
      >
        {label}
      </div>
      <div className={`text-center text-base font-medium ${color}`}>
        {value}
      </div>
    </div>
  );
}

export default StatItem;
