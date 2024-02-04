"use client"
import Navbar from "@/components/Navbar";
import {motion,useAnimation,useScroll,useSpring } from 'framer-motion';
import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const journey = () => {
    const scrollYProgress = useScroll();
    const translateY = scrollYProgress * (2000 - (-576)) - 576;
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });
  
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Create the ScrollTrigger animation
        gsap.to('.circle', {
          scrollTrigger: {
            trigger: '.circle',
            start: 'top 65%',
            end: 'top top',
            // markers: 'true',
            scrub: 'true',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          duration: 0.5,
        });
        gsap.to('.heading', {
            scrollTrigger: {
              trigger: '.heading',
              start: 'top 58%',
              end: 'top top',
              scrub:'true',
              markers:'true',
              toggleActions: 'play none none none',
            },
            opacity: 1,
            y: -20,
            duration: 1.2,
          });
      }, []);
    return (
      <>
        {/* <Navbar/> */}
        <div className="relative w-full h-96 gap-24 overflow-visible py-24">
            <div className="justify-center items-center content-center px-5 flex flex-col gap-6">
                <h1 className="items-center content-center text-5xl font-bold ">Journey So Far</h1>
                <h4 className="text-3xl font-semibold">MILESTONES</h4>
            </div>
        </div>
        <div className="relative w-full flex flex-col content-center items-center overflow-hidden py-24 px-5">
            <div className="flex  flex-row min-h-min z-1 relative gap-4 justify-items-center">
                <div className="content-center items-center flex flex-row gap-6 min-h-96 max-w-[610px] pb-32 min-w-[385px]">&nbsp;</div>
                <div className="content-start items-center justify-center flex h-min flex-col w-[100px]">
                    <div className="flex items-center justify-center gap-2 h-16 w-16 z-10 bg-black">
                        <div className="w-4 h-4 rounded-full bg-white item-center opacity-5 circle z-10">
                            &nbsp;
                        </div>
                    </div>
                    <div className="items-center flex flex-col w-[3px] h-[428px] bg-[#ffffff0d] z-0 ">
                        <motion.div className="bg-[#673ae4] w-full h-[318px] line"
                        style={{
                            transform: `translateY(${translateY}px)`, // Adjust the values based on your requirements
                          }}
                        >
                            &nbsp;
                        </motion.div>
                    </div>
                </div>
                <div className="flex flex-start flex-col h-min content-center pb-32 gap-6 max-w-[385px] opacity-0 heading">
                    <div className="flex flex-col flex-start gap-1 justify-center">
                        <h1>&nbsp;</h1>
                        <h1 className="text-3xl font-bold">
                            Heading
                        </h1>
                    </div>
                    <div className="flex flex-col flex-start text-base text-justify ">
                        <p className="justify-start text-slate-300">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Etiam 
                        aliquam nisl sit amet lacus volutpat,
                        vitae commodo odio tincidunt.
                        Suspendisse libero purus,
                        tincidunt in massa vel, eleifend aliquet
                        mi. Sed erat lorem, posuere quis dolor 
                        ullamcorper, posuere bibendum arcu. Donec
                        lacinia rutrum nibh faucibus malesuada. 
                        Quisque non aliquam nibh, quis laoreet 
                        magna. Morbi blandit ex sed lorem 
                        blandit interdum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex  flex-row min-h-min z-1 relative gap-4 justify-items-center">
            <div className="flex flex-start flex-col h-min content-center pb-32 gap-6 max-w-[385px]">
                    <div className="flex flex-col flex-start gap-1 justify-center">
                        <h1>&nbsp;</h1>
                        <h1 className="text-3xl font-bold">
                            Heading
                        </h1>
                    </div>
                    <div className="flex flex-col flex-start text-base text-justify ">
                        <p className="justify-start text-slate-300">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Etiam 
                        aliquam nisl sit amet lacus volutpat,
                        vitae commodo odio tincidunt.
                        Suspendisse libero purus,
                        tincidunt in massa vel, eleifend aliquet
                        mi. Sed erat lorem, posuere quis dolor 
                        ullamcorper, posuere bibendum arcu. Donec
                        lacinia rutrum nibh faucibus malesuada. 
                        Quisque non aliquam nibh, quis laoreet 
                        magna. Morbi blandit ex sed lorem 
                        blandit interdum.
                        </p>
                    </div>
                </div>
                <div className="content-start items-center justify-center flex h-min flex-col w-[100px]">
                    <div className="flex items-center justify-center gap-2 h-16 w-16">
                        <div className="w-4 h-4 rounded-full bg-white item-center">
                            &nbsp;
                        </div>
                    </div>
                    <div className="items-center flex flex-col w-[3px] h-[428px] bg-[#ffffff0d] z-0 ">
                        <div className="bg-[#673ae4] w-full h-[318px]">
                            &nbsp;
                        </div>
                    </div>
                </div>
                
                <div className="content-center items-center flex flex-row gap-6 min-h-96 max-w-[610px] pb-32 min-w-[385px]">&nbsp;</div>
            </div>
            <div className="flex  flex-row min-h-min z-1 relative gap-4 justify-items-center">
                <div className="content-center items-center flex flex-row gap-6 min-h-96 max-w-[610px] pb-32 min-w-[385px]">&nbsp;</div>
                <div className="content-start items-center justify-center flex h-min flex-col w-[100px]">
                    <div className="flex items-center justify-center gap-2 h-16 w-16">
                        <div className="w-4 h-4 rounded-full bg-white item-center">
                            &nbsp;
                        </div>
                    </div>
                    <div className="items-center flex flex-col w-[3px] h-[428px] bg-[#ffffff0d] z-0 ">
                        <div className="bg-[#673ae4] w-full h-[318px]">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <div className="flex flex-start flex-col h-min content-center pb-32 gap-6 max-w-[385px]">
                    <div className="flex flex-col flex-start gap-1 justify-center">
                        <h1>&nbsp;</h1>
                        <h1 className="text-3xl font-bold">
                            Heading
                        </h1>
                    </div>
                    <div className="flex flex-col flex-start text-base text-justify ">
                        <p className="justify-start text-slate-300">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Etiam 
                        aliquam nisl sit amet lacus volutpat,
                        vitae commodo odio tincidunt.
                        Suspendisse libero purus,
                        tincidunt in massa vel, eleifend aliquet
                        mi. Sed erat lorem, posuere quis dolor 
                        ullamcorper, posuere bibendum arcu. Donec
                        lacinia rutrum nibh faucibus malesuada. 
                        Quisque non aliquam nibh, quis laoreet 
                        magna. Morbi blandit ex sed lorem 
                        blandit interdum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex  flex-row min-h-min z-1 relative gap-4 justify-items-center">
            <div className="flex flex-start flex-col h-min content-center pb-32 gap-6 max-w-[385px]">
                    <div className="flex flex-col flex-start gap-1 justify-center">
                        <h1>&nbsp;</h1>
                        <h1 className="text-3xl font-bold">
                            Heading
                        </h1>
                    </div>
                    <div className="flex flex-col flex-start text-base text-justify ">
                        <p className="justify-start text-slate-300">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Etiam 
                        aliquam nisl sit amet lacus volutpat,
                        vitae commodo odio tincidunt.
                        Suspendisse libero purus,
                        tincidunt in massa vel, eleifend aliquet
                        mi. Sed erat lorem, posuere quis dolor 
                        ullamcorper, posuere bibendum arcu. Donec
                        lacinia rutrum nibh faucibus malesuada. 
                        Quisque non aliquam nibh, quis laoreet 
                        magna. Morbi blandit ex sed lorem 
                        blandit interdum.
                        </p>
                    </div>
                </div>
                <div className="content-start items-center justify-center flex h-min flex-col w-[100px]">
                    <div className="flex items-center justify-center gap-2 h-16 w-16">
                        <div className="w-4 h-4 rounded-full bg-white item-center">
                            &nbsp;
                        </div>
                    </div>
                    <div className="items-center flex flex-col w-[3px] h-[428px] bg-[#ffffff0d] z-0 ">
                        <div className="bg-[#673ae4] w-full h-[318px]">
                            &nbsp;
                        </div>
                    </div>
                </div>
                
                <div className="content-center items-center flex flex-row gap-6 min-h-96 max-w-[610px] pb-32 min-w-[385px]">&nbsp;</div>
            </div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>0</div>
        </div>
      </>
    );
  }
  export default journey