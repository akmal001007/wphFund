import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url('../../public/images/hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 clip-path bg-navColor z-0"></div>
      <div className="max-w-7xl mx-auto  flex flex-col items-start justify-center h-full relative z-10">
        <h1 className="text-white text-2xl md:text-6xl font-normal mt-16 mb-6">
          Support women. <br />
          Respond to crisis. <br />
          Build peace.
        </h1>
        <div className="bg-btnColor text-white mb-4 p-4 rounded-sm shadow-lg overflow-hidden hover:shadow-xl cursor-pointer">
          join the #investwomen global campaign
        </div>
        <div className="flex space-x-2">
          <div className="bg-card text-white rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-[-6px] hover:shadow-xl cursor-pointer">
            <div className="p-6">
              <h4 className="text-sm font-semibold">our donars</h4>
              <p className="mt-2 text-3xl text-left">
                wphf is supported by governments, individuals, and private
                sectors from around the world.
              </p>
              <a
                href="https://link-to-card1.com"
                className="inline-block mt-4 text-white hover:underline hover:text-black"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="bg-cardTwo text-white rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-[-8px] hover:shadow-xl cursor-pointer">
            <div className="p-6">
              <h4 className="text-sm font-semibold">our partners</h4>
              <p className="mt-2 text-3xl text-left">
                women's Organizationas are at the heart of WPHF's mandate, both
                as decision makers.
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
