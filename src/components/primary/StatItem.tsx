import React from "react";

interface StatItemProps {
  label: string; // nazev statistiky
  value: string | number; // hodnota statistiky
  color: string; //barva statistiky
}

function StatItem({ label, value, color }: StatItemProps) {
  return (
    <div className="grow shrink basis-0 h-10 border-b border-text2/10 flex justify-between items-center">
      <div className="text-text2 text-base font-normal">{label}</div>
      <div className={`text-center text-base font-medium ${color}`}>
        {value}
      </div>
    </div>
  );
}

export default StatItem;
