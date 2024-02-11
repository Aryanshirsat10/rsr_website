import Navbar from "@/components/Navbar";
import JourneyCard from "@/components/JourneyCard";
import { journeycard } from "@/constants";

const journey = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-80 overflow-visible py-32">
        <div className="justify-center items-center content-center px-5 flex flex-col gap-6">
          <h1 className="items-center content-center text-5xl font-bold ">
            Journey So Far
          </h1>
          <h4 className="text-3xl font-semibold">MILESTONES</h4>
        </div>
      </div>
      <div className="w-full flex flex-col content-center items-center overflow-hidden py-16 px-5">
        {journeycard.map((journey, index) => (
          <JourneyCard key={`journey-${index}`} index={index} {...journey} />
        ))}
      </div>
    </>
  );
};
export default journey;
