import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 400]);
  

  const isVideo = (url) => {
    return url.match(/\.(mp4|webm|ogg|mov)(\?.*)?$/i);
  };

  const fourth = Math.ceil(images.length / 4);
  const firstPart = images.slice(0, fourth);
  const secondPart = images.slice(fourth, 2 * fourth - 1);
  const thirdPart = images.slice(2 * fourth - 1, 3 * fourth - 1);
  const fourthPart = images.slice(3 * fourth - 1);

  // Media component that renders either Image or video based on URL
  const MediaItem = ({ src }) => {
    if (isVideo(src)) {
      return (
        <video
          src={src}
          className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
          height="400"
          width="600"
          autoPlay
          loop
          muted
          playsInline
        />
      );
    } else {
      return (
        <Image
          src={src}
          className="h-80 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
          height="400"
          width="600"
          alt="Image"
          loading="lazy"
        />
      );
    }
  };

  return (
    <div
      className={cn(
        "h-[50rem] items-start overflow-y-auto scrollbar-hide w-full",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start mx-auto gap-10 py-20 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <MediaItem src={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <MediaItem src={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <MediaItem src={el} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {fourthPart.map((el, idx) => (
            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
              <MediaItem src={el} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
