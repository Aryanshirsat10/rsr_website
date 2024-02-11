"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";

import { teamMembers } from "@/constants";

const teamPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20 flex flex-col flex-wrap h-full w-full items-center justify-center content-center scroll-smooth mx-auto lg:p-10 p-16">
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
                <Card className="rounded-none border-none outline-none">
                  <CardBody className="text-white bg-black flex flex-row w-full items-center justify-center content-center flex-wrap p-10">
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
                  </CardBody>
                </Card>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default teamPage;
