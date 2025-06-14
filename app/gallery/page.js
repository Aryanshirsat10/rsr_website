"use client";
import { useState, useEffect } from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import galleryImages from "@/constants/galleryImages";
import Loader from "@/components/Loader";

const GalleryPage = () => {
  const filtersList = [
    "All",
    "Competition",
    "Manufacturing",
    "Testing",
    "Teams",
    "Events"
  ];
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = galleryImages.flatMap((item) => item.images);

  const filteredImages =
    selectedFilter === "All"
      ? images
      : galleryImages.find((category) => category.title === selectedFilter)
          ?.images || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [selectedFilter]);

  return (
    <section className="bg-black">
      <div className="flex justify-center items-center">
        <video
          src="https://res.cloudinary.com/dma4lhef7/video/upload/v1712559586/website-images/Day-4_endurance_video_kvhri3.mp4"
          autoPlay
          loop
          className="rounded-lg w-2/3 object-cover mt-24"
        ></video>
      </div>
      <div className="flex  flex-wrap justify-center items-center gap-10 mb-5">
        {filtersList.map((filter, index) => {
          return (
            <button
              className={`border-2 border-red-500 text-xl px-4 py-2 rounded-lg cursor-pointer text-white ${
                selectedFilter == filter
                  ? "bg-red-500 text-white"
                  : "bg-transparent"
              }`}
              key={index}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="relative ">
        {!imagesLoaded ? (
          <div className="py-20">
            <Loader />
          </div>
        ) : (
          <ParallaxScroll images={filteredImages} />
        )}
      </div>
    </section>
  );
};

export default GalleryPage;
