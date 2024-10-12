"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgTemplate } from "react-icons/cg";
import { FaFire, FaReact, FaVuejs } from "react-icons/fa";
import { TbBrandNextjs, TbIcons } from "react-icons/tb";
import { LuLayoutTemplate } from "react-icons/lu";
import CountUp from "react-countup";

const Banner = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="w-full min-h-screens">
      <div className="flex 1024px:flex-row flex-col items-center justify-center text-center px-8 640px:px-12 640px:pl-12 mt-[1rem] 425px:mt-[1rem] ">
        <motion.div
          className="1024px:w-[70%] w-full relative"
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div className="w-[100px] 1040px:h-[400px] h-[100px] bg-[#96E8F8] absolute opacity-50 640px:opacity-100 bottom-[0px] 640px:bottom-[50px] right-12 blur-[70px] rotate-[-60deg] animate-pulse"></div>
          <div className="w-[100px] h-[300px] bg-[#9A04F5] absolute top-[-200px] animate-pulse opacity-30 left-8 blur-[70px] rotate-[-50deg]"></div>
          <Link
            href="https://github.com/wapborhan/webkit-wapborhan"
            target="__BLANK"
          >
            <div
              className="gradient-border"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="800"
              data-aos-offset="0"
            >
              <div className="px-4 w-fit mx-auto text-[0.6rem] 1024px:py-1.5 backdrop-blur-md rounded-full 1024px:text-[0.9rem] font-[500] flex items-center gap-2">
                <FaFire className="text-[0.8rem] 1024px:text-[1.3rem] text-red-500" />
                <p className="bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent">
                  Star us on Github
                </p>
              </div>
            </div>
          </Link>

          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-[2.4rem] font-[600] 425px:text-[2rem] 640px:text-[2.8rem] leading-[3rem] 425px:leading-[2.5rem] 640px:leading-[1.25] text-text"
          >
            <span className="heroText text-danger font-[500]">WeBKit</span> Free
            Online <br /> Tools For Developers
          </motion.h1>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="my-4 640px:my-6"
          >
            <div className="flex flex-wrap items-center justify-center gap-y-[10px] gap-x-[20px] 640px:gap-[20px]">
              <h3 className="text-[1.1rem] text-gray-600 font-[500]"></h3>
              <div className="flex items-center gap-[5px]">
                <FaReact className="text-[1.4rem] text-[#53b7d3]" />
                <p className="text-[1.1rem] text-[#53b7d3]">ReactJS</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <FaVuejs className="text-[1.8rem] text-[#41b883]" />
                <p className="text-[1.1rem] text-[#41b883]">VueJS</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <TbBrandNextjs className="text-[1.5rem] text-black" />
                <p className="text-[1.1rem] text-black">NextJS</p>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=" text-gray-500 w-full font-[400] text-[1.1rem]"
          >
            WeBKit offers free online tools for developers, including
            formatters, code minifiers, encoders/decoders, string escapers,
            message digesters, and web resources. It also provides Tailwind CSS
            components with UI examples, blocks, and more.
            {/* templates, Icons, Color Palette */}
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex items-center justify-center gap-3 425px:gap-6 mt-8"
          >
            <Link
              href="/getting-started/overview"
              className="py-3 px-6 640px:px-8 bg-primary text-white rounded-md hover:bg-transparent border-primary border-2 hover:text-primary transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/components/all"
              className="py-[11px] z-10 px-6 640px:px-8 border-2 border-primary hover:bg-primary hover:text-white text-primary rounded-md transition-all duration-300"
            >
              Components
            </Link>
          </motion.div>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex items-center justify-center flex-wrap gap-x-[20px] 640px:gap-3 425px:gap-6 mt-6"
          >
            <div
              title="Components"
              className="flex items-center gap-[1px] 1024px:text-[2.4rem] text-[1.4rem] 640px:text-[2.5rem] font-[600] bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"
            >
              <LuLayoutTemplate className="text-[2rem] 640px:text-[2.2rem] text-danger mr-1.5" />
              <CountUp start={0} end={600} duration={5} delay={1}></CountUp>
              <p className="mb-1">+</p>
            </div>
            <div
              title="Icons"
              className="flex items-center gap-[1px] 1024px:text-[2.4rem] text-[1.4rem] 640px:text-[2.5rem] font-[600] bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent"
            >
              <TbIcons className="text-[2rem] 640px:text-[2.2rem] text-primary mr-1.5" />
              <CountUp start={0} end={500} duration={5} delay={1}></CountUp>
              <p className="mb-1">+</p>
            </div>
            <div
              title="Templates"
              className="flex items-center gap-[1px] 1024px:text-[2.4rem] text-[1.4rem] 640px:text-[2.5rem] font-[600] bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"
            >
              <CgTemplate className="text-[2rem] 640px:text-[2.4rem] text-danger mr-1.5" />
              <CountUp start={0} end={20} duration={5} delay={1}></CountUp>
              <p className="mb-1">+</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Banner;
