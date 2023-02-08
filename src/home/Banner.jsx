import React from "react";
import BannerIMG from "../assets/img/banner.png";
import CodeIMG from "../assets/img/code.png";

const Banner = () => {
  return (
    <section
      className="border-general relative -mt-16 w-full overflow-hidden overflow-x-clip border-b bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#0B1120] dark:bg-none lg:h-screen"
      id="home"
    >
      <div className="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
      <div className="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
      <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
      <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
      <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
      <div className="w-full bg-pattern py-10 dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:py-0">
        <div className="container opacity-100">
          <div className="mt-16 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:gap-28">
            <div className="flex w-full flex-col justify-center space-y-10">
              <div className="flex flex-col space-y-4 text-center lg:text-left">
                <div>
                  <span

                  // style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"
                  >
                    <span
                    // style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"
                    >
                      <img
                        // style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2750%27/%3e"
                      />
                    </span>
                    <img
                      alt="Redux Logo"
                      // srcset={CodeIMG}
                      src={CodeIMG}
                      decoding="async"
                      data-nimg="intrinsic"
                      className="brightness-110 h-20 w-100 items-center inline-block"
                      // style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    />
                  </span>
                </div>
                {/* <h2 className="text-link text-normal font-semibold">
                  বাংলা রিয়্যাক্ট-রিডাক্স কোর্স
                </h2> */}
                <h1 className="hero-title dark:text-white">
                  Free Online
                  <span className="primary-highlighter">Tools</span> For
                  Developers
                </h1>
                <h2 className="subtitle">Converter, Formatter and Generator</h2>
              </div>
              <p className="text-1 text-medium text-center lg:text-left">
                I created this website to help developers by providing them with
                free online tools. These tools include several formatters,
                validators, code minifiers, string escapers, encoders and
                decoders, message digesters, web resources and more.
              </p>
            </div>
            <div className="relative flex w-full items-center justify-center mt-20">
              <img src={BannerIMG} alt="Banner" />
              <div
                className="transion-all absolute inset-0 left-80 top-64 duration-1000 ease-in-out"
                id="cursor"
                // style="top: 50px; left: 144px; opacity: 0;"
              ></div>
            </div>
          </div>
          <div className="mx-auto flex justify-center text-center mt-10 gap-4 lg:mx-0">
            <div className="hidden lg:block">
              <a href="#features">
                <div className="scroll-container">
                  <div className="scroller"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
