"use client";
import CompCard from "@/components/shared/CompCard";

const compData = {
  id: 1,
  headText: "animate label input",
  headId: "animate_label_input",
  description:
    "This is an animated label text input field. Enter your data here, and the label will animate accordingly.",
  reactCode: `<label className="relative w-[80%]">
  <input type="text" name="name" id="name" className="peer border-[#4d4f52] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
  />
  <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
    Your name
  </span>
</label>`,
  vueCode: ``,
};

const Animated = () => {
  return (
    <>
      <CompCard compData={compData}>
        <div className="relative w-full 1024px:w-[80%]">
          <input
            type="text"
            name="name"
            id="name"
            className="peer border-border border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
          />
          <div className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#777777] peer-focus:px-1 transition-all duration-300">
            Your name
          </div>
        </div>
      </CompCard>
    </>
  );
};

export default Animated;
