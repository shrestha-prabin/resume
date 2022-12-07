import React from "react";

const LeftRightContainer = ({ leftChildren, rightChildren }: any) => {
  return (
    <div className="flex flex-row flex-wrap pt-6">
      <div className="min-w-[16em]">
        <div className="flex row items-center space-x-2">{leftChildren}</div>
      </div>
      <div className="flex-1">{rightChildren}</div>
    </div>
  );
};

export default LeftRightContainer;
