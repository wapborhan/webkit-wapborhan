import React from "react";

const Header = () => {
  return (
    <nav class="border-general sticky top-0 z-40 border-b bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80">
      <div class="container">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex items-center lg:px-0">
            <div class="flex flex-shrink-0 items-center">
              <a class="flex items-center" href="/">
                <span
                //  style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"
                >
                  <span
                  //  style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"
                  >
                    {/* <img
                      // style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%2732%27/%3e"
                    /> */}
                  </span>{" "}
                  WebKit WB
                  {/* <img
                    alt="Learn with Sumit"
                    src="/_next/static/media/lws-logo-light.ae7b3c3a.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    // style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    srcset="/_next/static/media/lws-logo-light.ae7b3c3a.svg 1x, /_next/static/media/lws-logo-light.ae7b3c3a.svg 2x"
                  /> */}
                </span>
              </a>
            </div>
          </div>
          <div class="flex space-x-2 lg:hidden">
            <div class="ml-auto flex flex-shrink-0 items-center p-1 text-gray-400 hover:text-white focus:outline-none">
              <div class="mantine-ThemeIcon-root focus-reset flex-shrink-0 cursor-pointer p-1 mantine-1hy8bmw">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                </svg>
              </div>
            </div>
            <button
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none"
              id="headlessui-disclosure-button-:R396:"
              type="button"
              aria-expanded="false"
            >
              <a
                class="mantine-UnstyledButton-root mantine-Burger-root h-auto mantine-7qp4sr"
                title="Open navigation"
              >
                <div class="mantine-1asblv6 mantine-Burger-burger"></div>
              </a>
            </button>
          </div>
          <div class="hidden lg:flex lg:items-center lg:space-x-8">
            <div class="flex space-x-2">
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                href="/"
              >
                হোম
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#features"
              >
                ফিচার্স
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#modules"
              >
                মডিউলস
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#projects"
              >
                প্রজেক্টস
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#process"
              >
                কিভাবে চলবে
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#why-course"
              >
                কেন করবেন
              </a>
              <a
                current="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                default=""
                class="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                href="/#support"
              >
                সাপোর্ট
              </a>
            </div>
            <div class="hidden lg:ml-4 lg:block">
              <div class="flex items-center space-x-4">
                <div class="mantine-ThemeIcon-root focus-reset flex-shrink-0 cursor-pointer p-1 mantine-1hy8bmw">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                  </svg>
                </div>
                <div>
                  <div class="flex space-x-3">
                    <a
                      class="mantine-Button-filled !bg-slate-900 !text-sm dark:!bg-sky-600 rounded-full mantine-Button-root mantine-13eqaio"
                      type="button"
                      href="/login"
                    >
                      <div class="mantine-3xbgk5 mantine-Button-inner">
                        <span class="mantine-qo1k2 mantine-Button-label">
                          লগইন
                        </span>
                      </div>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
