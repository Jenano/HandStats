import React from "react";

interface PageTitleProps {
  value: string;
}

function PageTitle({ value }: PageTitleProps) {
  return <div className="text-cerna text-xl font-medium my-5">{value}</div>;
}

export default PageTitle;
