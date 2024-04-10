import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const page = () => {
  return (
    <div className="h-full w-full pt-24 px-5">
      <h1 className="text-6xl font-bold flex justify-center pb-10">
        Latest News
      </h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            imageSrc={item.link}
            className={""}
            // i === 3 || i === 6 || i == 10 ? "md:col-span-2" :
          />
        ))}
      </BentoGrid>
    </div>
  );
};
const Skeleton = ({imageUrl}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 dark:from-neutral-900 dark:to-neutral-800 to-neutral-800 object-cover justify-center">
    <img src={imageUrl} alt="Skeleton Image" className="h-full"></img>
  </div>
 );
 
const items = [
  {
    title: "PATVIN Engineering joins RedShift as it's Title Sponsor",
    // description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764930/website-images/announcements/patvin_title_sponsor_deskvz.png"/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764930/website-images/announcements/patvin_title_sponsor_deskvz.png",
  },
  {
    title: "RedShift Racing India is thankful to RAJESH ENGINEERING for their significant support",
    // description: "RedShift Racing India is thankful to RAJESH ENGINEERING for their significant support",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Rajesh_Engineering_Works_zdqyyj.png"/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Rajesh_Engineering_Works_zdqyyj.png",
  },
  {
    title: "RedShift Racing India is thankful to HARDWIN FASTENERS for their continuous support",
    // description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764922/website-images/announcements/Hardwin_Fasteners_xfv7ij.png"/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764922/website-images/announcements/Hardwin_Fasteners_xfv7ij.png",
  },
  {
    title: "RedShift Racing India is thankful to SCANTECH LASER for their relentless support",
    // description:"Understand the impact of effective communication in our lives.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Scantech_Laser_x6okw1.png"/>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Scantech_Laser_x6okw1.png",
  },
  {
    title: "RedShift Racing India would like to thank IRMRA for their massive support",
    // description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764924/website-images/announcements/Irmra_r3qmpz.png"/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764924/website-images/announcements/Irmra_r3qmpz.png",
  },
  {
    title: "RedShift Racing India gratefully acknowledges the continued support from BMI BEARINGS",
    // description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764920/website-images/announcements/BMI_Bearings_ydctmg.png"/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764920/website-images/announcements/BMI_Bearings_ydctmg.png",
  },
  {
    title: "RedShift Racing India is grateful to MESCO Springs for their continuous support towards the team",
    // description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764927/website-images/announcements/Mesco_Springs_vy4wix.png"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764927/website-images/announcements/Mesco_Springs_vy4wix.png",
  },
  {
    title: "Team RedShift Racing India sends its heartfelt thanks to HPCL, for their steadfast support",
    // description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764923/website-images/announcements/HPCL_za2590.png"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764923/website-images/announcements/HPCL_za2590.png",
  },
  {
    title: "Team RedShift Racing India expresses it's immense gratitude to GODREJ AEROSPACE for their unwavering support",
    // description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764921/website-images/announcements/Godrej_Aerospace_loijni.png"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764921/website-images/announcements/Godrej_Aerospace_loijni.png",
  },
  {
    title: "Mr. John Abraham wishes the team best luck",
    // description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764925/website-images/announcements/JohnAbraham_lkm5wi.jpg"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764925/website-images/announcements/JohnAbraham_lkm5wi.jpg",
  },
  {
    title: "RedShift Racing India at DNA AutoFest 2019",
    // description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764919/website-images/announcements/DNA_AutoFest_bcgyd3.jpg"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764919/website-images/announcements/DNA_AutoFest_bcgyd3.jpg",
  },
  {
    title: "RedShift Racing India at Abhiyantriki 2019",
    // description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton imageUrl="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Abhiyantriki2019_epsmfl.jpg"/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Abhiyantriki2019_epsmfl.jpg",
  },
];
export default page;
