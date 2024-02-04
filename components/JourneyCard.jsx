import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const JourneyCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".circle", {
      scrollTrigger: {
        trigger: ".circle",
        start: "top 65%",
        end: "top top",
        // markers: 'true',
        scrub: "true",
        toggleActions: "play none none none",
      },
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(".heading", {
      scrollTrigger: {
        trigger: ".heading",
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
    gsap.to(".heading", {
      scrollTrigger: {
        trigger: ".heading",
        start: "top center",
        end: "top end",
        scrub: "true",
        // markers: "true",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: -20,
      duration: 1,
    });
  }, []);
  return (
    <div className="flex  flex-row min-h-min z-1 gap-4 justify-items-center even:flex-row-reverse">
      <div className="content-center items-center flex flex-row gap-6 min-h-96 max-w-[610px] pb-32 min-w-[385px]">
        &nbsp;
      </div>
      <div className="content-start items-center justify-center flex h-min flex-col w-[100px]">
        <div className="flex items-center justify-center gap-2 h-16 w-16 z-10 bg-black">
          <div className="w-4 h-4 rounded-full bg-white item-center opacity-5 circle z-10">
            &nbsp;
          </div>
        </div>
        <div className="w-1 h-[400px] bg-[#ffffff0d] z-0" ref={ref}>
          <motion.div
            className="bg-[#673ae4] w-full h-[400px] line"
            style={{ transformOrigin: "top", scaleY: scrollYProgress }}
          >
            &nbsp;
          </motion.div>
        </div>
      </div>
      <div className="flex flex-start flex-col h-min content-center pb-32 gap-6 max-w-[385px] opacity-0 heading">
        <div className="flex flex-col flex-start gap-1 justify-center">
          <h1>&nbsp;</h1>
          <h1 className="text-3xl font-bold">Heading</h1>
        </div>
        <div className="flex flex-col flex-start text-base text-justify ">
          <p className="justify-start text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt.
            Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet
            mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum
            arcu. Donec lacinia rutrum nibh faucibus malesuada. Quisque non
            aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit
            interdum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
