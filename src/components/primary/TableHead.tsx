import React from "react";

interface TableHeadProps {
  label: string;
}

function TableHead({ label }: TableHeadProps) {
  return (
    <th className="px-4 py-2 text-center font-medium text-[#404145]">
      {label}
    </th>
  );
}

export default TableHead;
