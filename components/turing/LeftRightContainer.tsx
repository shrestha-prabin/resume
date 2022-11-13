import React from "react";

const LeftRightContainer = ({ leftChildren, rightChildren }: any) => {
  return (
    <div className="grid grid-cols-7 pt-6">
      <div className="col-span-7 md:col-span-2">
        <div className="flex row items-center space-x-2">{leftChildren}</div>
      </div>
      <div className="col-span-7 md:col-span-5">{rightChildren}</div>
    </div>
  );
};

export default LeftRightContainer;
