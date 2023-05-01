import React from "react";
import { profile2 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative lgl:bottom-[150px]">
      <img
        className="w-[300px] h-[300px] z-10 rounded-xl border-lightText border border-4  border-double"
        src={profile2}
        alt="profile2"
      />
    </div>
  );
};

export default RightBanner;
