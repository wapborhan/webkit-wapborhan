"use client";
import GradientComponent from "./GradientComponent ";
import { IoColorPaletteSharp, IoAddSharp } from "react-icons/io5";
const gradientsData = [
  {
    id: 1,
    name: "HOVER ME",
    css: `linear-gradient(to right, #2b5876 0%, #4e4376 51%, #2b5876 100%)`,
    tailwind: "bg-gradient-to-r from-[#2b5876] via-[#4e4376] to-[#2b5876]",
  },
  {
    id: 2,
    name: "HOVER ME",
    css: `linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%)`,
    tailwind: "bg-gradient-to-r from-[#314755] via-[#26a0da] to-[#314755]",
  },
  {
    id: 3,
    name: "HOVER ME",
    css: `linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%)`,
    tailwind: "bg-gradient-to-r from-[#77A1D3] via-[#79CBCA] to-[#77A1D3]",
  },
  {
    id: 4,
    name: "HOVER ME",
    css: `linear-gradient(to right, #ff6e7f 0%, #bfe9ff 51%, #ff6e7f 100%)`,
    tailwind: "bg-gradient-to-r from-[#ff6e7f] via-[#bfe9ff] to-[#ff6e7f]",
  },
  {
    id: 5,
    name: "HOVER ME",
    css: `linear-gradient(to right, #e52d27 0%, #b31217 51%, #e52d27 100%)`,
    tailwind: "bg-gradient-to-r from-[#e52d27] via-[#b31217] to-[#e52d27]",
  },
  {
    id: 6,
    name: "HOVER ME",
    css: `linear-gradient(to right, #603813 0%, #b29f94 51%, #603813 100%)`,
    tailwind: "bg-gradient-to-r from-[#603813] via-[#b29f94] to-[#603813]",
  },
  {
    id: 7,
    name: "HOVER ME",
    css: `linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)`,
    tailwind: "bg-gradient-to-r from-[#16A085] via-[#F4D03F] to-[#16A085]",
  },
  {
    id: 8,
    name: "HOVER ME",
    css: `linear-gradient(to right, #D31027 0%, #EA384D 51%, #D31027 100%)`,
    tailwind: "bg-gradient-to-r from-[#D31027] via-[#EA384D] to-[#D31027]",
  },
  {
    id: 9,
    name: "HOVER ME",
    css: `linear-gradient(to right, #EDE574 0%, #E1F5C4 51%, #EDE574 100%)`,
    tailwind: "bg-gradient-to-r from-[#EDE574] via-[#E1F5C4] to-[#EDE574]",
  },
  {
    id: 10,
    name: "HOVER ME",
    css: `linear-gradient(to right, #02AAB0 0%, #00CDAC 51%, #02AAB0 100%)`,
    tailwind: "bg-gradient-to-r from-[#02AAB0] via-[#00CDAC] to-[#02AAB0]",
  },
  {
    id: 11,
    name: "HOVER ME",
    css: `linear-gradient(to right, #DA22FF 0%, #9733EE 51%, #DA22FF 100%)`,
    tailwind: "bg-gradient-to-r from-[#DA22FF] via-[#9733EE] to-[#DA22FF]",
  },
  {
    id: 12,
    name: "HOVER ME",
    css: `linear-gradient(to right, #348F50 0%, #56B4D3 51%, #348F50 100%)`,
    tailwind: "bg-gradient-to-r from-[#348F50] via-[#56B4D3] to-[#348F50]",
  },
  {
    id: 13,
    name: "HOVER ME",
    css: `linear-gradient(to right, #3CA55C 0%, #B5AC49 51%, #3CA55C 100%)`,
    tailwind: "bg-gradient-to-r from-[#3CA55C] via-[#B5AC49] to-[#3CA55C]",
  },
  {
    id: 14,
    name: "HOVER ME",
    css: `linear-gradient(to right, #CC95C0 0%, #DBD4B4 51%, #CC95C0 100%)`,
    tailwind: "bg-gradient-to-r from-[#CC95C0] via-[#DBD4B4] to-[#CC95C0]",
  },
  {
    id: 15,
    name: "HOVER ME",
    css: `linear-gradient(to right, #003973 0%, #E5E5BE 51%, #003973 100%)`,
    tailwind: "bg-gradient-to-r from-[#003973] via-[#E5E5BE] to-[#003973]",
  },
  {
    id: 16,
    name: "HOVER ME",
    css: `linear-gradient(to right, #E55D87 0%, #5FC3E4 51%, #E55D87 100%)`,
    tailwind: "bg-gradient-to-r from-[#E55D87] via-[#5FC3E4] to-[#E55D87]",
  },
  {
    id: 17,
    name: "HOVER ME",
    css: `linear-gradient(to right, #403B4A 0%, #E7E9BB 51%, #403B4A 100%)`,
    tailwind: "bg-gradient-to-r from-[#403B4A] via-[#E7E9BB] to-[#403B4A]",
  },
  {
    id: 18,
    name: "HOVER ME",
    css: `linear-gradient(to right, #F09819 0%, #EDDE5D 51%, #F09819 100%)`,
    tailwind: "bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819]",
  },
  {
    id: 19,
    name: "HOVER ME",
    css: `linear-gradient(to right, #FF512F 0%, #DD2476 51%, #FF512F 100%)`,
    tailwind: "bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F]",
  },
  {
    id: 20,
    name: "HOVER ME",
    css: `linear-gradient(to right, #AA076B 0%, #61045F 51%, #AA076B 100%)`,
    tailwind: "bg-gradient-to-r from-[#AA076B] via-[#61045F] to-[#AA076B]",
  },
  {
    id: 21,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1A2980 0%, #26D0CE 51%, #1A2980 100%)`,
    tailwind: "bg-gradient-to-r from-[#1A2980] via-[#26D0CE] to-[#1A2980]",
  },
  {
    id: 22,
    name: "HOVER ME",
    css: `linear-gradient(to right, #FF512F 0%, #F09819 51%, #FF512F 100%)`,
    tailwind: "bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]",
  },
  {
    id: 23,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1D2B64 0%, #F8CDDA 51%, #1D2B64 100%)`,
    tailwind: "bg-gradient-to-r from-[#1D2B64] via-[#F8CDDA] to-[#1D2B64]",
  },
  {
    id: 24,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1FA2FF 0%, #12D8FA 51%, #1FA2FF 100%)`,
    tailwind: "bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#1FA2FF]",
  },
  {
    id: 25,
    name: "HOVER ME",
    css: `linear-gradient(to right, #4CB8C4 0%, #3CD3AD 51%, #4CB8C4 100%)`,
    tailwind: "bg-gradient-to-r from-[#4CB8C4] via-[#3CD3AD] to-[#4CB8C4]",
  },
  {
    id: 26,
    name: "HOVER ME",
    css: `linear-gradient(to right, #DD5E89 0%, #F7BB97 51%, #DD5E89 100%)`,
    tailwind: "bg-gradient-to-r from-[#DD5E89] via-[#F7BB97] to-[#DD5E89]",
  },
  {
    id: 27,
    name: "HOVER ME",
    css: `linear-gradient(to right, #EB3349 0%, #ff7963 51%, #EB3349 100%)`,
    tailwind: "bg-gradient-to-r from-[#EB3349] via-[#ff7963] to-[#EB3349]",
  },
  {
    id: 28,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1D976C 0%, #93F9B9 51%, #1D976C 100%)`,
    tailwind: "bg-gradient-to-r from-[#1D976C] via-[#93F9B9] to-[#1D976C]",
  },
  {
    id: 29,
    name: "HOVER ME",
    css: `linear-gradient(to right, #FF8008 0%, #FFC837 51%, #FF8008 100%)`,
    tailwind: "bg-gradient-to-r from-[#FF8008] via-[#FFC837] to-[#FF8008]",
  },
  {
    id: 30,
    name: "HOVER ME",
    css: `linear-gradient(to right, #16222A 0%, #3A6073 51%, #16222A 100%)`,
    tailwind: "bg-gradient-to-r from-[#16222A] via-[#3A6073] to-[#16222A]",
  },
  {
    id: 31,
    name: "HOVER ME",
    css: `linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)`,
    tailwind: "",
  },
  {
    id: 32,
    name: "HOVER ME",
    css: `linear-gradient(to right, #085078 0%, #85D8CE  51%, #085078  100%)`,
    tailwind: "",
  },
  {
    id: 33,
    name: "HOVER ME",
    css: `linear-gradient(to right, #2BC0E4 0%, #EAECC6  51%, #2BC0E4  100%)`,
    tailwind: "",
  },
  {
    id: 34,
    name: "HOVER ME",
    css: `linear-gradient(to right, #134E5E 0%, #71B280  51%, #134E5E  100%)`,
    tailwind: "",
  },
  {
    id: 35,
    name: "HOVER ME",
    css: `linear-gradient(to right, #5C258D 0%, #4389A2  51%, #5C258D  100%)`,
    tailwind: "",
  },
  {
    id: 36,
    name: "HOVER ME",
    css: `linear-gradient(to right, #757F9A 0%, #D7DDE8  51%, #757F9A  100%)`,
    tailwind: "",
  },
  {
    id: 37,
    name: "HOVER ME",
    css: `linear-gradient(to right, #232526 0%, #414345  51%, #232526  100%)`,
    tailwind: "",
  },
  {
    id: 38,
    name: "HOVER ME",
    css: `linear-gradient(to right, #1CD8D2 0%, #93EDC7  51%, #1CD8D2  100%)`,
    tailwind: "",
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
