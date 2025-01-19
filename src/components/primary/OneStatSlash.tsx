import React from "react";

interface OneStatSlashProps {
  goals: string;
  shots: string;
}

function OneStatSlash({ goals, shots }: OneStatSlashProps) {
  return (
    <div className="text-center flex items-center justify-center text-text2 text-base">
      {goals}/{shots}
    </div>
  );
}

export default OneStatSlash;
