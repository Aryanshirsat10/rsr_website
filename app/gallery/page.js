// "use client";

import Navbar from "@/components/Navbar";
import ImageComponent from "@/components/ImageComponent";

import { galleryImages } from "@/constants";

const galleryPage = async () => {
  var photos = [];
  galleryImages.forEach((element) => {
    element.images.forEach((photo) => {
      photos.push(photo);
    });
  });

  return (
    <>
      <Navbar />
      <div> Carousel </div>
      <div className="mt-16 pt-12 scroll-smooth p-10 columns-4 space-y-4">
        {photos.map((pic, index) => {
          return <ImageComponent pic={pic} key={index} />;
        })}
      </div>
    </>
  );
};

export default galleryPage;
