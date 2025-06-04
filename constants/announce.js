import React from "react";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 dark:from-neutral-900 dark:to-neutral-800 to-neutral-800"></div>
  );
  const items = [
    {
      title: "Bucephalus ecovestment joins Redshift Racing India as it's Principal Sponsor",
      // description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/video/upload/v1749044789/website-images/announcements/Latest_Bucephalus_announcement_pfhtfl.mp4",
    },
    {
      title: "PATVIN Engineering joins RedShift as it's Title Sponsor",
      // description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764930/website-images/announcements/patvin_title_sponsor_deskvz.png",
    },
    {
      title: "RedShift Racing India is thankful to RAJESH ENGINEERING for their significant support",
      // description: "RedShift Racing India is thankful to RAJESH ENGINEERING for their significant support",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Rajesh_Engineering_Works_zdqyyj.png",
    },
    {
      title: "RedShift Racing India is thankful to HARDWIN FASTENERS for their continuous support",
      // description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764922/website-images/announcements/Hardwin_Fasteners_xfv7ij.png",
    },
    {
      title: "RedShift Racing India is thankful to SCANTECH LASER for their relentless support",
      // description:"Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Scantech_Laser_x6okw1.png",
    },
    {
      title: "RedShift Racing India would like to thank IRMRA for their massive support",
      // description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764924/website-images/announcements/Irmra_r3qmpz.png",
    },
    {
      title: "RedShift Racing India gratefully acknowledges the continued support from BMI BEARINGS",
      // description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764920/website-images/announcements/BMI_Bearings_ydctmg.png",
    },
    {
      title: "RedShift Racing India is grateful to MESCO Springs for their continuous support towards the team",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764927/website-images/announcements/Mesco_Springs_vy4wix.png",
    },
    {
      title: "Team RedShift Racing India sends its heartfelt thanks to HPCL, for their steadfast support",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764923/website-images/announcements/HPCL_za2590.png",
    },
    {
      title: "Team RedShift Racing India expresses it's immense gratitude to GODREJ AEROSPACE for their unwavering support",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764921/website-images/announcements/Godrej_Aerospace_loijni.png",
    },
    {
      title: "Mr. John Abraham wishes the team best luck",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764925/website-images/announcements/JohnAbraham_lkm5wi.jpg",
    },
    {
      title: "RedShift Racing India at DNA AutoFest 2019",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764919/website-images/announcements/DNA_AutoFest_bcgyd3.jpg",
    },
    {
      title: "RedShift Racing India at Abhiyantriki 2019",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
      link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Abhiyantriki2019_epsmfl.jpg",
    },
  ];

  export default items;