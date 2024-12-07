import React from "react";
import img from '../../public/images/hero.jpg'

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('../../public/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-7xl mx-auto  flex flex-col items-start justify-center h-full relative z-10">
        <h1 className="text-white text-2xl md:text-6xl font-normal mt-16 mb-6">
          Support women. <br />
          Respond to crisis. <br />
          Build peace.
        </h1>
        <div className="bg-btnColor text-white mb-4 p-4 rounded-sm shadow-lg overflow-hidden hover:shadow-xl">
          join the #investwomen global campaign
        </div>
        <div className="flex space-x-2">
          <div className="bg-card text-white rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-[-6px] hover:shadow-xl">
            <div className="p-6">
              <h4 className="text-sm font-semibold">our donars</h4>
              <p className="mt-2">
                wphf is supported by governments, individuals,
                <br /> and private sectors from around the world.
              </p>
              <a
                href="https://link-to-card1.com"
                className="inline-block mt-4 text-white hover:underline hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-cardTwo text-white rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl">
            <div className="p-6">
              <h4 className="text-sm font-semibold">our partners</h4>
              <p className="mt-2">
                women's Organizationas are at the heart of <br />
                WPHF's mandate, both as decision makers.
              </p>
              <a
                href="https://link-to-card2.com"
                className="inline-block mt-4 text-white hover:underline hover:text-black"
              >
                apply for funding
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
