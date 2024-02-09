import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";

import { teamMembers } from "@/constants";

const teamPage = () => {
  console.log(teamMembers);
  return (
    <>
      <Navbar />
      <div className="mt-24 flex flex-row flex-wrap h-full items-center justify-center content-center scroll-smooth  mx-auto px-10">
        <TeamCard name="Dhruv Dedhia" role="Role" />
        <TeamCard name="Dhruv Dedhia" role="Role" />
        <TeamCard name="Dhruv Dedhia" role="Role" />
        <TeamCard name="Dhruv Dedhia" role="Role" />
        <TeamCard name="Dhruv Dedhia" role="Role" />
        <TeamCard name="Dhruv Dedhia" role="Role" />
      </div>
    </>
  );
};

export default teamPage;
