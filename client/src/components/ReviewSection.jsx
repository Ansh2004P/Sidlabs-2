import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdLocationOn, MdAlarm, MdPhone, MdLink } from "react-icons/md";
import CustomCard from "./CustomCards";
import img1 from "../assets/imgs/ReviewBanner.jpg";

const ReviewSection = () => {
  return (
    <>
      <div className="relative w-full h-[25rem]">
        <div className="relative w-full h-full bg-black text-white">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src={img1}
              alt="Travel Background"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative z-10 p-8 text-white">
            <div className="py-12">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">WHY TRAVELINK?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <MdLocationOn className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">REAL-TIME UPDATES</h3>
                    <p className="mt-2 text-sm">
                      Stay connected with live updates on your travel status, so
                      your friends and family are always informed.
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <MdAlarm className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">SAFETY ALERTS</h3>
                    <p className="mt-2 text-sm">
                      Receive safety alerts and notifications to ensure you're
                      aware of any potential risks during your travels.
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <MdPhone className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">
                      SEAMLESS COMMUNICATION
                    </h3>
                    <p className="mt-2 text-sm">
                      Easily share your travel experiences and updates with your
                      loved ones through integrated messaging features.
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <MdLink className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">EASY INTEGRATION</h3>
                    <p className="mt-2 text-sm">
                      Integrate effortlessly with popular social media and
                      messaging platforms to keep everyone in the loop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="pt-8 font-semibold flex items-center flex-col w-full bg-white">
        <div className="flex flex-col items-center w-full px-4 bg-white">
          <div className="w-full max-w-3xl h-[0.1125rem] bg-sky-700 mb-4 "></div>
          <h1 className="text-[#0076B4] text-[1.125rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.4375rem] font-bold text-center">
            What do seekers say about TravelLink?
          </h1>
          <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mt-4"></div>
        </div>
      </header>

      <div className="w-full h-fit overflow-x-auto py-8 flex space-x-4 bg-white">
        {Array.from({ length: 16 }).map((_, index) => (
          <CustomCard
            key={index}
            name="John Doe"
            rating="5"
            testimonial="I had a great experience using TravelLink. The real-time updates and safety alerts were very helpful."
          />
        ))}
      </div>
      <header className="pt-8 font-semibold flex items-center flex-col w-full bg-white">
        <div className="flex flex-col items-center w-full px-4 bg-white">
          <div className="w-full max-w-3xl h-[0.1125rem] bg-sky-700 mb-4 "></div>
          <h1 className="text-[#0076B4] text-[1.125rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.4375rem] font-bold text-center">
            What do Watchers say about TravelLink?
          </h1>
          <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mt-4"></div>
        </div>
      </header>

      <div className="w-full h-fit overflow-x-auto py-8 flex space-x-4 bg-white">
        {Array.from({ length: 16 }).map((_, index) => (
          <CustomCard
            key={index}
            name="John Doe"
            rating="5"
            testimonial="I had a great experience using TravelLink. The real-time updates and safety alerts were very helpful."
          />
        ))}
      </div>
    </>
  );
};

export default ReviewSection;
