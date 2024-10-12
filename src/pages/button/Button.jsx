"use client";
import GradientComponent from "./GradientComponent ";
import { IoColorPaletteSharp, IoAddSharp } from "react-icons/io5";
const gradientsData = [
  {
    id: 1,
    name: "HOVER ME",
    css: `linear-gradient(to right, #2b5876 0%, #4e4376 51%, #2b5876 100%)`,
  },
  {
    id: 2,
    name: "HOVER ME",
    css: `linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%)`,
  },
  {
    id: 3,
    name: "HOVER ME",
    css: `linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%)`,
  },
  {
    id: 4,
    name: "HOVER ME",
    css: `linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)`,
  },
  {
    id: 5,
    name: "HOVER ME",
    css: `linear-gradient(to right, #e52d27 0%, #b31217 51%, #e52d27 100%)`,
  },
  {
    id: 6,
    name: "HOVER ME",
    css: `linear-gradient(to right, #603813 0%, #b29f94  51%, #603813  100%)`,
  },
  {
    id: 7,
    name: "HOVER ME",
    css: `linear-gradient(to right, #16A085 0%, #F4D03F  51%, #16A085  100%)`,
  },
  {
    id: 8,
    name: "HOVER ME",
    css: `linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)`,
  },
  {
    id: 9,
    name: "HOVER ME",
    css: `linear-gradient(to right, #EDE574 0%, #E1F5C4  51%, #EDE574  100%)`,
  },
  {
    id: 10,
    name: "HOVER ME",
    css: `linear-gradient(to right, #02AAB0 0%, #00CDAC  51%, #02AAB0  100%)`,
  },
  {
    id: 11,
    name: "HOVER ME",
    css: `linear-gradient(to right, #DA22FF 0%, #9733EE  51%, #DA22FF  100%)`,
  },
  {
    id: 12,
    name: "HOVER ME",
    css: `linear-gradient(to right, #348F50 0%, #56B4D3  51%, #348F50  100%)`,
  },
  {
    id: 13,
    name: "HOVER ME",
    css: `linear-gradient(to right, #3CA55C 0%, #B5AC49  51%, #3CA55C  100%)`,
  },
  {
    id: 14,
    name: "HOVER ME",
    css: `linear-gradient(to right, #CC95C0 0%, #DBD4B4  51%, #CC95C0  100%)`,
  },
  {
    id: 15,
    name: "HOVER ME",
    css: `linear-gradient(to right, #003973 0%, #E5E5BE  51%, #003973  100%)`,
  },
  {
    id: 16,
    name: "HOVER ME",
    css: `linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%)`,
  },
  {
    id: 17,
    name: "HOVER ME",
    css: `linear-gradient(to right, #403B4A 0%, #E7E9BB  51%, #403B4A  100%)`,
  },
  {
    id: 18,
    name: "HOVER ME",
    css: `linear-gradient(to right, #F09819 0%, #EDDE5D  51%, #F09819  100%)`,
  },
  {
    id: 19,
    name: "HOVER ME",
    css: `linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)`,
  },
  {
    id: 20,
    name: "HOVER ME",
    css: `linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%)`,
  },
  {
    id: 21,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%)`,
  },
  {
    id: 22,
    name: "HOVER ME",
    css: `linear-gradient(to right, #FF512F 0%, #F09819  51%, #FF512F  100%)`,
  },
  {
    id: 23,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1D2B64 0%, #F8CDDA  51%, #1D2B64  100%)`,
  },
  {
    id: 24,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1FA2FF 0%, #12D8FA  51%, #1FA2FF  100%)`,
  },
  {
    id: 25,
    name: "HOVER ME",
    css: `linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)`,
  },
  {
    id: 26,
    name: "HOVER ME",
    css: `linear-gradient(to right, #DD5E89 0%, #F7BB97  51%, #DD5E89  100%)`,
  },
  {
    id: 27,
    name: "HOVER ME",
    css: `linear-gradient(to right, #EB3349 0%, #ff7963  51%, #EB3349  100%)`,
  },
  {
    id: 28,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1D976C 0%, #93F9B9  51%, #1D976C  100%)`,
  },
];

function Buttons() {
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
              Buttons
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
                // colors={gradient?.colors}
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

export default Buttons;
