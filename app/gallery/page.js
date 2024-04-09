"use client";
import Navbar from "@/components/Navbar";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

// import galleryImages from "@/constants/galleryImages";
import galleryImagesAll from "@/constants/galleryImagesAll";

const galleryPage = () => {
  return (
    <>
      <div>
        <ParallaxScroll images={galleryImagesAll} />
      </div>
    </>
  );
};

export default galleryPage;
