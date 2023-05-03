import React from "react";
import { profile2 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative lgl:bottom-[150px]">
      <img
        className="w-[350px] h-[350px] z-10 rounded-xl border-designColor border border-4  border-double ring-4 outline-double ring-offset-4"
        src={profile2}
        alt="profile2"
      />
    </div>
  );
};

export default RightBanner;
