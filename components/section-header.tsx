import React from "react";

const SectionHeader = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="space-y-2 ml-2 md:ml-0">
      <div className="text-brandPrimary flex gap-2 text-lg  font-bold items-center">
        <div className="h-10 w-5 bg-brandPrimary rounded" />
        {subHeading}
      </div>
      <h1 className="text-4xl font-semibold">{heading}</h1>
    </div>
  );
};

export default SectionHeader;
