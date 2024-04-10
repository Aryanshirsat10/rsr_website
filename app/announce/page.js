import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import items from "@/constants/announce";

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
            className={i === 3 || i === 6 || i == 10 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default page;
