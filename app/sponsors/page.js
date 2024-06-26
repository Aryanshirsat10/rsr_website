import React from "react";
import { sponsors } from "@/constants/sponsors";

const Sponsorcard = ({ logo, name, intro, link }) => {
  return (
    <a href={link}>
      <div className="w-fit h-max relative flex items-center justify-center before:w-[100px] before:h-[100px] before:content-[''] before:absolute before:bg-[rgb(144,161,255)] before:transition-all before:duration-[1s] before:rounded-[50%] before:left-[135px] before:top-[95px] hover:before:translate-x-[-50px] hover:before:translate-y-[50px] px-5">
        <div className="relative w-72 h-[425px] flex flex-col items-center justify-between backdrop-blur-[30px] bg-[rgba(65,65,65,0.308)] border cursor-pointer px-2.5 py-5 rounded-[10px] border-solid border-[rgba(255,255,255,0.089)]">
          <p className="font-bold text-[0.9em] tracking-[1.2px] text-white text-center">
            {name}
          </p>
          {/* <p className="font-medium text-[0.7em] tracking-[1.2px] text-[rgb(197,197,197)]">PARTILY CLOUDY</p> */}

          <p className="">
            <img src={logo} alt={name} />
          </p>
          <div className="w-full flex items-center">
            <p className="text-xs font-normal text-white">{intro}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
const sponsorspage = () => {
  return (
    <>
      <div className="mt-16 pt-12 flex flex-row flex-wrap gap-10 h-full items-center justify-center content-center scroll-smooth bg-black">
        {sponsors.map((sponsor, index) => (
          <Sponsorcard key={`sponsor-${index}`} index={index} {...sponsor} />
        ))}
      </div>
    </>
  );
};

export default sponsorspage;
