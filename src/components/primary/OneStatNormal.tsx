import React from "react";

// Define the interface
export interface OneStatProps {
  value: string;
}

function OneStat({ value }: OneStatProps) {
  return (
    <div className="text-center flex items-center justify-center text-text2 text-base">
      {value}
    </div>
  );
}

export default OneStat;
