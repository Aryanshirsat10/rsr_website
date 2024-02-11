import Navbar from "@/components/Navbar";
import React from "react";

const Fund = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 pt-8 flex flex-col flex-wrap gap-10 h-full items-center justify-center">
        <div>
          <h2 className="text-3xl font-bold">Benefits To Get</h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-3xl font-bold">Budget Roadmap</h2>
          <div className="w-[70%] h-[70%] shadow-2xl shadow-slate-700 mb-20 rounded-lg">
            <img
              src="/images/Budget_Roadmap.png"
              alt="Budget Roadmap"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-12">
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[450px] bg-gradient-to-r from-slate-700 from-opacity-60 to-slate-900 relative shadow-2xl shadow-slate-800 cursor-pointer transition-all duration-[0.3s] rounded-[20px] hover:scale-90">
              <span className="absolute overflow-hidden w-[150px] h-[150px] flex items-center justify-center -left-2.5 -top-2.5 before:content-['Diamond'] before:absolute before:w-[150%] before:h-10 before:bg-[linear-gradient(45deg,#ff6547_0%,#ffb144_51%,#ff7053_100%)] before:-rotate-45 before:-translate-y-5 before:flex before:items-center before:justify-center before:text-white before:font-semibold before:tracking-widest before:uppercase before:shadow-[0_5px_10px_rgba(0,0,0,0.23)] after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:z-[-1] after:shadow-[140px_-140px_#cc3f47] after:bg-[linear-gradient(45deg,#FF512F_0%,#F09819_51%,#FF512F_100%)] after:left-0 after:bottom-0"></span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[450px] bg-gradient-to-r from-slate-700 from-opacity-60 to-slate-900 relative shadow-2xl shadow-slate-800 cursor-pointer transition-all duration-[0.3s] rounded-[20px] hover:scale-90">
              <span className="absolute overflow-hidden w-[150px] h-[150px] flex items-center justify-center -left-2.5 -top-2.5 before:content-['Platinum'] before:absolute before:w-[150%] before:h-10 before:bg-[linear-gradient(45deg,#ff6547_0%,#ffb144_51%,#ff7053_100%)] before:-rotate-45 before:-translate-y-5 before:flex before:items-center before:justify-center before:text-white before:font-semibold before:tracking-widest before:uppercase before:shadow-[0_5px_10px_rgba(0,0,0,0.23)] after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:z-[-1] after:shadow-[140px_-140px_#cc3f47] after:bg-[linear-gradient(45deg,#FF512F_0%,#F09819_51%,#FF512F_100%)] after:left-0 after:bottom-0"></span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[450px] bg-gradient-to-r from-slate-700 from-opacity-60 to-slate-900 relative shadow-2xl shadow-slate-800 cursor-pointer transition-all duration-[0.3s] rounded-[20px] hover:scale-90">
              <span className="absolute overflow-hidden w-[150px] h-[150px] flex items-center justify-center -left-2.5 -top-2.5 before:content-['Gold'] before:absolute before:w-[150%] before:h-10 before:bg-[linear-gradient(45deg,#ff6547_0%,#ffb144_51%,#ff7053_100%)] before:-rotate-45 before:-translate-y-5 before:flex before:items-center before:justify-center before:text-white before:font-semibold before:tracking-widest before:uppercase before:shadow-[0_5px_10px_rgba(0,0,0,0.23)] after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:z-[-1] after:shadow-[140px_-140px_#cc3f47] after:bg-[linear-gradient(45deg,#FF512F_0%,#F09819_51%,#FF512F_100%)] after:left-0 after:bottom-0"></span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[400px] h-[450px] bg-gradient-to-r from-slate-700 from-opacity-60 to-slate-900 relative shadow-2xl shadow-slate-800 cursor-pointer transition-all duration-[0.3s] rounded-[20px] hover:scale-90">
              <span className="absolute overflow-hidden w-[150px] h-[150px] flex items-center justify-center -left-2.5 -top-2.5 before:content-['Silver'] before:absolute before:w-[150%] before:h-10 before:bg-[linear-gradient(45deg,#ff6547_0%,#ffb144_51%,#ff7053_100%)] before:-rotate-45 before:-translate-y-5 before:flex before:items-center before:justify-center before:text-white before:font-semibold before:tracking-widest before:uppercase before:shadow-[0_5px_10px_rgba(0,0,0,0.23)] after:content-[''] after:absolute after:w-2.5 after:h-2.5 after:z-[-1] after:shadow-[140px_-140px_#cc3f47] after:bg-[linear-gradient(45deg,#FF512F_0%,#F09819_51%,#FF512F_100%)] after:left-0 after:bottom-0"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fund;
