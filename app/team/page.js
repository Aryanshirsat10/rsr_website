"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/react";

import TeamCard from "@/components/TeamCard";
import Loader from "@/components/Loader";
import teamMembers from "@/constants/team";

const teamPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="mt-16 pt-10 flex flex-col flex-wrap h-full w-full items-center justify-center content-center scroll-smooth mx-auto lg:p-10 p-16 bg-black">
        {isLoading ? (
          <div className="py-20">
            <Loader />
          </div>
        ) : (
          <Tabs
            color="danger"
            classNames={{
              tabList: "bg-cardBlack",
            }}
            size="lg"
          >
            {teamMembers.map((item, index) => {
              return (
                <Tab key={index} title={item.value}>
                  <div className="w-full items-center justify-center flex">
                    <img
                      src={item.link}
                      loading="lazy"
                      className="w-2/3 p-2 mx-4 object-cover h-[500px]"
                    />
                  </div>
                  <div className="rounded-none border-none outline-none text-white bg-black flex flex-row w-full items-center justify-center content-center flex-wrap p-10">
                    {item.members.map((member, ind) => {
                      return (
                        <TeamCard
                          name={member.name}
                          role={member.role}
                          position={member.position}
                          key={ind}
                        />
                      );
                    })}
                  </div>
                </Tab>
              );
            })}
          </Tabs>
        )}
      </div>
    </>
  );
};

export default teamPage;
