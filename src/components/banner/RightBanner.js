import React from "react";
import { profile2 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/3 flex justify-center items-center relative lgl:bottom-[80px] lgl:pl-20 shadow-xl">
      <img
        className="w-[350px] h-[350px] z-10 rounded-xl border-4 border-double"
        src={profile2}
        alt="profile2"
      />
    </div>
  );
};

export default RightBanner;
