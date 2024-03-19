"use client";
import { Tabs, Tab } from "@nextui-org/react";

import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";

import teamMembers from "@/constants/team";

const teamPage = () => {
  return (
    <>
      <div className="mt-16 pt-10 flex flex-col flex-wrap h-full w-full items-center justify-center content-center scroll-smooth mx-auto lg:p-10 p-16 bg-black">
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
      </div>
    </>
  );
};

export default teamPage;
