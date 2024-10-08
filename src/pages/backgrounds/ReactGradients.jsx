"use client";
import GradientComponent from "./GradientComponent ";
import { IoColorPaletteSharp, IoAddSharp } from "react-icons/io5";
const gradientsData = [
  {
    name: "Emerald",
    css: "linear-gradient(to right, #10b981, #65a30d)",
    tailwind: "bg-gradient-to-r from-emerald-500 to-lime-600",
    colors: ["#10b981", "#65a30d"],
  },
  {
    name: "Horizon",
    css: "linear-gradient(#f97316, #fde047)",
    tailwind: "bg-gradient-to-b from-orange-500 to-yellow-300",
    colors: ["#f97316", "#fde047"],
  },
  {
    name: "Green Apple",
    css: "linear-gradient(to right, #22c55e, #15803d)",
    tailwind: "bg-gradient-to-r from-green-500 to-green-700",
    colors: ["#22c55e", "#15803d"],
  },
  {
    name: "Deep Blue",
    css: "linear-gradient(to right, #2563eb, #1e40af, #1e3a8a)",
    tailwind: "bg-gradient-to-r from-blue-600 via-blue-800 to-blue-900",
    colors: ["#2563eb", "#1e40af", "#1e3a8a"],
  },
  {
    name: "Dawn",
    css: "linear-gradient(to right, #fb7185, #fdba74)",
    tailwind: "bg-gradient-to-r from-rose-400 to-orange-300",
    colors: ["#fb7185", "#fdba74"],
  },
  {
    name: "Midnight",
    css: "linear-gradient(to right, #1d4ed8, #1e40af, #111827)",
    tailwind: "bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900",
    colors: ["#1d4ed8", "#1e40af", "#111827"],
  },
  {
    name: "Coral",
    css: "linear-gradient(to right, #60a5fa, #34d399)",
    tailwind: "bg-gradient-to-r from-blue-400 to-emerald-400",
    colors: ["#60a5fa", "#34d399"],
  },
  {
    name: "Flamingo",
    css: "linear-gradient(to right, #f472b6, #db2777)",
    tailwind: "bg-gradient-to-r from-pink-400 to-pink-600",
    colors: ["#f472b6", "#db2777"],
  },
  {
    name: "Ocean",
    css: "linear-gradient(to right, #a5f3fc, #22d3ee)",
    tailwind: "bg-gradient-to-r from-cyan-200 to-cyan-400",
    colors: ["#a5f3fc", "#22d3ee"],
  },
  {
    name: "Metal",
    css: "conic-gradient(at right center, #c7d2fe, #475569, #c7d2fe)",
    tailwind: "bg-conic-to-r from-indigo-200 via-slate-600 to-indigo-200",
    colors: ["#c7d2fe", "#475569", "#c7d2fe"],
  },
  {
    name: "Green Galaxy",
    css: "radial-gradient(at left center, #06b6d4, #047857, #dbeafe)",
    tailwind: "bg-radial-at-l from-cyan-500 via-emerald-700 to-blue-100",
    colors: ["#06b6d4", "#047857", "#dbeafe"],
  },
  {
    name: "Pure Blue Shade",
    css: "conic-gradient(at left top, #14b8a6, #4338ca, #1f2937)",
    tailwind: "bg-conic-to-tl from-teal-500 via-indigo-700 to-gray-800",
    colors: ["#14b8a6", "#4338ca", "#1f2937"],
  },
];

function ReactGradients() {
  return (
    <>
      <div className="play-details">
        <div className="play-details-body">
          {/* Header/Intro of play */}
          <div className="w-full h-fit py-11 px-7 text-center">
            <span className="font-bold md:text-4xl text-3xl w-full text-black inline-flex justify-center items-center">
              <IoColorPaletteSharp
                className="text-[#00f2fe] mt-auto mb-auto"
                size={50}
              />
              Gradients
            </span>
            <p className="mt-2 font-semibold md:text-xl text-lg w-full text-gray-700">
              A collection of beautiful gradients that you can copy to easily
              use in your application.
            </p>
          </div>

          {/* Grid layout of all gradients */}
          <div className="flex py-2 md:px-6 px-4 flex-wrap gap-8 items-center justify-center">
            {gradientsData.map((gradient, index) => (
              <GradientComponent
                key={index}
                colors={gradient?.colors}
                css={gradient?.css}
                index={index}
                name={gradient?.name}
                tailwind={gradient?.tailwind}
              />
            ))}
          </div>

          {/* <a
            className="fixed bottom-16 md:right-9 right-7 w-fit p-4 text-white bg-[#00f2fe] rounded-full font-semibold text-xl inline-flex justify-center items-center border-2 border-[#00f2fe] hover:bg-white hover:text-[#00f2fe] transition-all duration-200"
            href="https://github.com/reactplay/react-play/tree/main/src/plays/react-gradients#contributing"
            rel="noreferrer"
            target="_blank"
          >
            <IoAddSharp size={32} />{" "}
            <span className="md:flex hidden ml-2">Add a Gradient</span>
          </a> */}
        </div>
      </div>
    </>
  );
}

export default ReactGradients;
