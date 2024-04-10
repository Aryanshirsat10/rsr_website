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
      title: "PATVIN Engineering joins RedShift as it's Title Sponsor",
      // description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India is thankful to RAJESH ENGINEERING for their significant support",
      // description: "RedShift Racing India is thankful to RAJESH ENGINEERING for their significant support",
      header: <Skeleton />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India is thankful to HARDWIN FASTENERS for their continuous support",
      // description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India is thankful to SCANTECH LASER for their relentless support",
      // description:"Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India would like to thank IRMRA for their massive support",
      // description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India gratefully acknowledges the continued support from BMI BEARINGS",
      // description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India is grateful to MESCO Springs for their continuous support towards the team",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Team RedShift Racing India sends its heartfelt thanks to HPCL, for their steadfast support",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Team RedShift Racing India expresses it's immense gratitude to GODREJ AEROSPACE for their unwavering support",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Mr. John Abraham wishes the team best luck",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India at DNA AutoFest 2019",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "RedShift Racing India at Abhiyantriki 2019",
      // description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

  export default items;