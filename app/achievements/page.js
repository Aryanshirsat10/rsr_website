"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { achievements, achievements2 } from "@/constants";

import { Tabs, Tab } from "@nextui-org/react";

const AchievementCard = ({ rank, round, competition, year }) => {
  return (
    <div className="flex flex-col gap-4 w-[40%] rounded-xl h-max bg-gray-900 p-2 items-center">
      <h4 className="text-xl font-semibold">{rank}</h4>
      <p className="text-lg font-medium">{round}</p>
    </div>
  );
};
const Achievements = () => {
  return (
    <>
      <div className="w-full h-full bg-black pt-24 flex flex-col items-center">
        <h1 className="text-center text-white font-bold text-5xl mb-10">
          Achievements
        </h1>
        <Tabs
          color="danger"
          classNames={{
            tabList: "bg-cardBlack",
          }}
          size="lg"
        >
          <Tab title="BAJA SAE" className="flex justify-center">
            <div className="pt-10 p-5 flex flex-wrap justify-center items-start gap-4 w-[80%] flex-row">
              {/* {achievements.map((achievement,index) => (
                    <AchievementCard 
                    key={`achievement-${index}`}  
                    index={index}
                    {...achievement}
                    />
                ))} */}
              {Object.entries(
                achievements.reduce((acc, achievement, index) => {
                  // Group achievements by year
                  const year = achievement.year;
                  if (!acc[year]) {
                    acc[year] = [];
                  }
                  acc[year].push(
                    <AchievementCard
                      key={`achievement-${index}`}
                      index={index}
                      {...achievement}
                    />
                  );
                  return acc;
                }, {})
              ).map(([year, yearAchievements]) => (
                <div
                  key={`year-${year}`}
                  className="flex flex-col items-center w-full"
                >
                  <h3 className="mt-4 text-2xl font-bold mb-2">🏆{year}🏆</h3>
                  <div className="flex flex-wrap justify-center items-center gap-4 w-full flex-row">
                    {yearAchievements}
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab title="MEGA ATV CHAMPIONSHIP" className="flex justify-center">
            <div className="pt-10 p-5 flex flex-wrap justify-center items-start gap-4 w-[80%] flex-row">
              {/* {achievements.map((achievement,index) => (
                    <AchievementCard 
                    key={`achievement-${index}`}  
                    index={index}
                    {...achievement}
                    />
                ))} */}
              {Object.entries(
                achievements2.reduce((acc, achievement, index) => {
                  // Group achievements by year
                  const year = achievement.year;
                  if (!acc[year]) {
                    acc[year] = [];
                  }
                  acc[year].push(
                    <AchievementCard
                      key={`achievement-${index}`}
                      index={index}
                      {...achievement}
                    />
                  );
                  return acc;
                }, {})
              ).map(([year, yearAchievements]) => (
                <div
                  key={`year-${year}`}
                  className="flex flex-col items-center w-full"
                >
                  <h3 className="mt-4 text-2xl font-bold mb-2">🏆{year}🏆</h3>
                  <div className="flex flex-wrap justify-center items-center gap-4 w-full flex-row">
                    {yearAchievements}
                  </div>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Achievements;
