import Navbar from "@/components/Navbar";
import JourneyCard from "@/components/JourneyCard";
import { journeycard } from "@/constants";
import { SparklesPreview } from "../../components/SparklesPreview";
const journey = () => {
  return (
    <>
      <SparklesPreview/>
      <div className="w-full flex flex-col content-center items-center overflow-hidden py-16 px-5 bg-black">
        {journeycard.map((journey, index) => (
          <JourneyCard key={`journey-${index}`} index={index} {...journey} />
        ))}
      </div>
    </>
  );
};
export default journey;
