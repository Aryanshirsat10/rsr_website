import React from "react";
import homeimg from "@/constants/homepageimages";
import Link from "next/link"; 

export default function Home() {
  const backgroundImageLink = homeimg[0].link;

  return (
    <div className="w-full bg-black">
      <section className="flex flex-col h-screen">
        <div
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative h-full"
          style={{
            backgroundImage: `url(${backgroundImageLink})`,
            backgroundPosition: "center center", // Adjust these values to crop the image
            backgroundSize: "cover", // This ensures the image covers the entire div
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src={backgroundImageLink} alt="Hero Image" className="absolute inset-0 w-full h-96 object-cover"/> */}
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center pt-72 md:pt-64 lg:pt-80 xl:pt-64 min-[2560px]:pt-[60%] min-[2560px]:pl-[50%]">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none text-shadow"
                  style={{
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 7.5)",
                  }}
                >
                  All-Terrain Adventure
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-white-300 md:text-xl dark:text-white-400 font-medium"
                  style={{
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 7.5)",
                  }}
                >
                  Dream Dare Drive. Conquer any landscape.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border-2 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:border-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/gallery"
                >
                  Explore gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-28 flex justify-center">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 text-center md:px-6">
            <div className="space-y-2 pb-12">
              <h2
                className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none text-shadow"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                About Us
              </h2>
            </div>
          </div>
          <div className="grid max-w-6xl grid-cols-1 items-start justify-center px-4 mx-auto gap-6 sm:grid-cols-2 md:px-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-lg border border-gray-900 bg-gray-850 overflow-hidden shadow-xl dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Car model"
                className="aspect-[2/1] object-cover object-center"
                height="200"
                src={homeimg[2].link}
              />
              <div className="flex-1 p-4 grid gap-1">
                <h3 className="text-xl font-bold text-white text-center">
                  Mission
                </h3>
                <p className="text-sm text-gray-50 dark:text-gray-400 text-center">
                  Build an efficient single seater all terrain vehicle with an
                  impeccable Design. Continuous Innovation, improvisation and
                  optimization to achieve our goals through assiduous work.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-900 bg-gray-850 overflow-hidden shadow-xl dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Car model"
                className="aspect-[2/1] object-cover object-center"
                height="200"
                src={homeimg[3].link}
              />
              <div className="flex-1 p-4 grid gap-1">
                <h3 className="text-xl font-bold text-white text-center">
                  Vision
                </h3>
                <p className="text-sm text-gray-50 dark:text-gray-400 text-center">
                  Compete with the best engineering minds nationally and
                  internationally. We believe &quot;Manufacturing vehicles for all
                  terrain is much cheaper than building roads for rough
                  terrains&quot;.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 flex justify-center items-center">
        <div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto  overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last"
                height="400"
                src={homeimg[1].link}
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    See Our Racing Journey
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400 text-justify">
                    You may see all of our prototypes, dating back to our
                    founding in 2011, here. A journey spanning 11 years of
                    racing, showcasing the different vehicles our forebears
                    constructed and the ones being further developed.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/journey"
                  >
                    View journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-28 flex justify-center flex-col items-center">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0" />
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 text-center md:px-6">
            <div className="space-y-2 pb-12">
              <h3
                className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none text-shadow"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Latest News
              </h3>
            </div>
          </div>
          <div className="grid max-w-7xl grid-cols-1 items-start justify-center px-4 mx-auto gap-6 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border border-gray-900 bg-gray-850 overflow-hidden shadow-xl dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Car model"
                className="aspect-[2/1] object-cover object-center"
                height="200"
                src="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764930/website-images/announcements/patvin_title_sponsor_deskvz.png"
              />
              <div className="flex-1 p-4 grid gap-1">
                <h5 className="text-sm text-gray-50 dark:text-gray-400">
                  PATVIN Engineering joins RedShift as it&apos;s Title Sponsor
                </h5>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-900 bg-gray-850 overflow-hidden shadow-xl dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Car model"
                className="aspect-[2/1] object-cover object-center"
                height="200"
                src="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764918/website-images/announcements/Rajesh_Engineering_Works_zdqyyj.png"
              />
              <div className="flex-1 p-4 grid gap-1">
                <h5 className="text-sm text-gray-50 dark:text-gray-400">
                  RedShift Racing India is thankful to RAJESH ENGINEERING for
                  their significant support
                </h5>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-900 bg-gray-850 overflow-hidden shadow-xl dark:border-gray-800 dark:bg-gray-950">
              <img
                alt="Car model"
                className="aspect-[2/1] object-cover object-center"
                height="200"
                src="https://res.cloudinary.com/dma4lhef7/image/upload/v1712764922/website-images/announcements/Hardwin_Fasteners_xfv7ij.png"
              />
              <div className="flex-1 p-4 grid gap-1">
                <h5 className="text-sm text-gray-50 dark:text-gray-400">
                  RedShift Racing India is thankful to HARDWIN FASTENERS for
                  their continuous support
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center pt-10">
          <Link
            className="inline-flex w-56 h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/announce"
          >
            View announce
          </Link>
        </div>
      </section>
      <section className="w-full py-12 justify-center hidden lg:flex">
        <div className="">
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-2 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-lg object-bottom sm:w-full lg:order-last lg:aspect-square"
                src={homeimg[4].link}
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4 items-end pr-48">
                <div className="space-y-2 w-72 flex flex-row gap-3">
                  <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl xl:text-8xl/none">
                  &quot;
                  </h1>
                  <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                    Manufacturing vehicles for all terrain is much cheaper than
                    building roads for rough terrains.&quot;
                  </h1>
                </div>
              </div>
            </div>
            <div className="absolute bg-white flex top-[85%] left-[39%] w-60 items-center justify-center">
              <h3 className="text-xl text-black">Redshift Racing KJSCE</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col" id="contact">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none py-6">
            Contact Us
          </h2>
          <p className="text-center w-1/2 py-6">
            To connect us with this beautiful journey contact us and see how our
            accomplishments stack up against the community
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
          <div className="border px-10 py-16 flex flex-col gap-10 items-center justify-center rounded-lg">
            <span className="text-4xl font-semibold">Prasad Joshi</span>
            <span className="flex items-center gap-2 text-xl">
              <img src="/icons/call.svg" alt="phone" />
              +91 7506067178
            </span>
          </div>
          <div className="border px-10 py-16 flex flex-col gap-10 items-center justify-center rounded-lg">
            <span className="text-4xl font-semibold">Paras Maisheri</span>
            <span className="flex items-center gap-2 text-xl">
              <img src="/icons/call.svg" alt="phone" />
              +91 9028074554
            </span>
          </div>
        </div>
        <div className="w-full px-20">
          <iframe
            src="https://maps.google.com/maps?q=redshift%20racing%20india&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[500px]"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
