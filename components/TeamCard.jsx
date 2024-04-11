import React from "react";

const TeamCard = ({ name, role, position }) => {
  return (
    <div className="bg-cardBlack h-56 w-64 md:w-80 flex flex-col gap-2 items-center justify-center font-EncodeSans border border-[rgba(255,255,255,0.089)] cursor-default hover:bg-[#141414] hover:scale-110 hover:z-30 transition duration-300 ease-in-out hover:shadow-teamShadow z-10 p-2">
      <div className="text-4xl font-medium text-wrap text-center">{name}</div>

      {position ? (
        <div className="text-xl font-medium text-wrap text-center">
          ({position})
        </div>
      ) : null}
      <div className="text-2xl">{role}</div>
    </div>
  );
};

export default TeamCard;
