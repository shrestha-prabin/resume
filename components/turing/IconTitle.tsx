import React from "react";

const IconTitle = ({ icon, title }: any) => {
  return (
    <div className="flex row items-center space-x-2">
      {icon}
      <div className="font-bold text-md">{title}</div>
    </div>
  );
};

export default IconTitle;
