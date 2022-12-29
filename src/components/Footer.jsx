import React from "react";

const Footer = () => {
  const d = new Date();
  return (
    <footer className="wrapper border-general border-t !pb-4 dark:bg-slate-900">
      <div className="container">
        <div className="mx-auto w-fit lg:mx-0">
          <div className="flex flex-shrink-0 items-center">
            <a className="flex items-center" href="/">
              {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                  <img
                    style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%2732%27/%3e"
                  />
                </span>
                <img
                  alt="Learn with Sumit"
                  src="/_next/static/media/lws-logo-dark.8e393acf.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  srcset="/_next/static/media/lws-logo-dark.8e393acf.svg 1x, /_next/static/media/lws-logo-dark.8e393acf.svg 2x"
                />
              </span> */}
            </a>
          </div>
        </div>
        {/* <div className="my-6 flex flex-col-reverse items-center justify-between gap-6 text-sm lg:flex-row">
          <div className="flex flex-wrap justify-center gap-4 text-slate-600 dark:text-slate-500 lg:flex-row lg:space-x-5">
            <a
              className="hover:text-slate-text-slate-700 dark:hover:text-slate-400"
              href="/payment-status"
            >
              পেমেন্ট স্ট্যাটাস
            </a>
            <a
              className="hover:text-slate-text-slate-700 dark:hover:text-slate-400"
              href="/verify-email"
            >
              ইমেইল ভেরিফাই
            </a>
            <a
              href="https://facebook.com/groups/learnwithsumit"
              target="_blank"
              className="hover:text-slate-text-slate-700 dark:hover:text-slate-400"
              rel="noreferrer"
            >
              পাবলিক সাপোর্ট গ্রুপ
            </a>
            <a
              className="hover:text-slate-text-slate-700 dark:hover:text-slate-400"
              href="/about-us"
            >
              আমাদের সম্পর্কে
            </a>
            <a
              className="hover:text-slate-text-slate-700 dark:hover:text-slate-400"
              href="/contact-us"
            >
              যোগাযোগ
            </a>
          </div>
        </div> */}
        <div className="mantine-Divider-root mantine-Divider-horizontal hidden !border-slate-900/10 dark:!border-slate-300/10 lg:block mantine-p7exr"></div>
        <div className="mt-4 flex flex-col-reverse items-center justify-between gap-2 text-slate-600 dark:text-slate-500 lg:my-6 lg:flex-row">
          <p className="text-small mt-2 text-center lg:text-left">
            Copyright © {d.getFullYear() + " "}
            &#9829; Webkit - WapBorhan । All rights reserved.
          </p>
          <div className="flex space-x-5 text-sm text-slate-600 dark:text-slate-500 ">
            <a
              className="hover:text-slate-text-slate-700 dark:hover:text-slate-400"
              href="/terms"
            >
              Terms
            </a>
            <a
              className="hover:text-slate-text-slate-700 dark:hover:text-slate-400"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
