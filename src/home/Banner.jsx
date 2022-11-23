import React from "react";

const Banner = () => {
  return (
    <section class="border-general relative -mt-16 w-full overflow-hidden overflow-x-clip border-b bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#0B1120] dark:bg-none lg:h-screen">
      <div class="absolute right-[28%] top-0 hidden h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
      <div class="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
      <div class="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
      <div class="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div class="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
      <div class="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div class="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
      <div class="w-full bg-pattern py-10 dark:bg-dpattern lg:flex lg:h-full lg:items-center lg:py-0">
        <div class="container opacity-100">
          <div class="mt-16 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:gap-28">
            <div class="flex w-full flex-col justify-center space-y-10">
              <div class="flex flex-col space-y-4 text-center lg:text-left">
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
                      srcset="/_next/static/media/redux.9b734afa.svg 1x, /_next/static/media/redux.9b734afa.svg 2x"
                      src="/_next/static/media/redux.9b734afa.svg"
                      decoding="async"
                      data-nimg="intrinsic"
                      class="brightness-110"
                      // style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    />
                  </span>
                </div>
                <h2 class="text-link text-normal font-semibold">
                  বাংলা রিয়্যাক্ট-রিডাক্স কোর্স
                </h2>
                <h1 class="hero-title dark:text-white">
                  থিংক ইন এ <span class="primary-highlighter">রিডাক্স</span> ওয়ে
                </h1>
                <h2 class="subtitle">
                  রিডাক্স টুলকিট, আর.টি.কে কুয়ারি এবং থাংক
                </h2>
              </div>
              <p class="text-1 text-medium text-center lg:text-left">
                রিডাক্স এর মৌলিক এবং আবশ্যিক বিষয়সমূহ বুঝার পাশাপাশি এই কোর্সের
                প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন দক্ষ রিডাক্স
                প্রোগ্রামার হয়ে উঠতে সাহায্য করবে বলে আমাদের বিশ্বাস।
              </p>
              <div class="mx-auto flex gap-4 lg:mx-0">
                <div class="hidden lg:block">
                  <button
                    class="mantine-Button-default bg-0 text-1 hover:bg-1 border-general mantine-Button-root mantine-1fotj4d"
                    type="button"
                    href="/courses/think-in-a-redux-way/introduction"
                  >
                    <div class="mantine-3xbgk5 mantine-Button-inner">
                      <span class="mantine-qo1k2 mantine-Button-label">
                        ইন্ট্রো ভিডিও দেখুন
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="relative flex w-full items-center justify-center">
              <div
                class="transion-all absolute inset-0 left-80 top-64 duration-1000 ease-in-out"
                id="cursor"
                // style="top: 50px; left: 144px; opacity: 0;"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
