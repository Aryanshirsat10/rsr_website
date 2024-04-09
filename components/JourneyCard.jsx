"use client";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const JourneyCard = ({ index, title, para, link, year }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`#circle${index}`, {
      scrollTrigger: {
        trigger: `#circle${index}`,
        start: "top 65%",
        end: "top top",
        // markers: 'true',
        scrub: "true",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(`#heading${index}`, {
      scrollTrigger: {
        trigger: `#heading${index}`,
        start: "top center",
        end: "top top",
        scrub: "true",
        // markers: "true",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: -20,
      duration: 1,
    });
  }, [index]);
  return (
    <div className="flex  flex-row min-h-min z-1 gap-4 justify-items-center lg:even:flex-row-reverse">
      <div className="hidden content-center items-center lg:flex flex-row gap-6 min-h-96 max-w-[610px] pb-32 min-w-[385px]">
        {/* <h1 className="text-5xl font-bold text-gray-400 opacity-0">{title}</h1> */}
      </div>
      <div className="content-start items-center justify-center flex h-min flex-col w-[100px]">
        <div className="flex items-center justify-center gap-2 h-16 w-16 z-10 bg-black">
          <div
            id={`circle${index}`}
            className="w-4 h-4 rounded-full bg-white item-center opacity-5 z-10"
          >
            &nbsp;
          </div>
        </div>
        <div className="w-1 h-[400px] bg-[#ffffff0d] z-0" ref={ref}>
          {/* #673ae4 */}
          <motion.div
            className="bg-[#ac0000] w-full h-[400px] line"
            style={{ transformOrigin: "top", scaleY: scrollYProgress }}
          >
            &nbsp;
          </motion.div>
        </div>
      </div>
      <div
        id={`heading${index}`}
        className="flex flex-start flex-col h-min content-center pb-32 gap-6 max-w-[385px] opacity-0"
      >
        <div className="flex flex-col flex-start gap-1 justify-center relative">
          <h1>&nbsp;</h1>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="flex flex-col flex-start text-base text-justify ">
          {/* <p className="justify-start text-slate-300">{para}</p> */}
          <span className="mb-2 absolute bottom-20 left-2 text-7xl font-semibold drop-shadow-lg ">
            {year}
          </span>
          <img src={link} className="w-96 object-cover"></img>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
