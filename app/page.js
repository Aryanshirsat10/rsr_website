import Navbar from "@/components/Navbar";

import Achievements from "@/sections/Achievements";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-black pt-20">
        <Achievements />
      </div>
    </>
  );
}
