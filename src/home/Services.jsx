import React from "react";
import ToolsLight from "../assets/img/tools-light.png";
import SerItem from "./SerItem";

const Services = () => {
  return (
    <section className="wrapper scroll-mt-16 bg-left bg-no-repeat dark:bg-[#0B1120]  dark:bg-none lg:bg-shape2_filpped">
      <div className="container relative space-y-14  mb-10">
        <div className="w-full text-center">
          <div className="flex h-full w-full items-center justify-center">
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
                    src="../assets/img/tools-light.png"
                  />
                </span>
                <img
                  alt="Peep"
                  srcSet={ToolsLight}
                  src={ToolsLight}
                  decoding="async"
                  data-nimg="intrinsic"
                  className="w-16"
                  // style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                />
              </span>
            </div>
          </div>
          <h1 className="section-title">
            Our Free Online <span className="primary-highlighter">Tools</span>{" "}
            at a glance
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="gradient-primary rounded-1 shadow-1 border-general relative mx-auto  border bg-white p-8 dark:bg-slate-800/[0.6] xl:max-w-6xl">
          <SerItem />
        </div>
      </div>
    </section>
  );
};

export default Services;
