import React from "react";

const TeamCard = ({ name, role }) => {
  return (
    <div className="bg-[#141414] h-64 w-64 flex flex-col agp-2 items-center justify-center font-EncodeSans border border-[rgba(255,255,255,0.089)] cursor-default hover:bg-[#141414] hover:scale-110 hover:z-50 transition duration-300 ease-in-out hover:shadow-teamShadow">
      <div className="text-3xl font-medium">{name}</div>
      <div className="text-xl">{role}</div>
    </div>
  );
};

export default TeamCard;
