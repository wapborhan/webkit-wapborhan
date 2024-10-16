export const componentData = [
  {
    id: 1,
    headText: "primary input",
    headId: "primary_input",
    description:
      "This is an input text field. Use it to enter your information, which will be processed accordingly.",
    reactCode: `const PrimaryInput = () => {
    
  return (
      <div className="w-[80%]">
        <label htmlFor="name" className="text-[15px] font-[400]">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>
    );
  };
  
  export default Textarea;`,
    vueCode: `<template>
    <div class="w-[80%]">
      <label for="name" class="text-[15px] font-[400]">
        Name <span class="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        class="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "PrimaryInput",
  };
  </script>`,
  },
  {
    id: 2,
    headText: "bottom bordered input",
    headId: "bottom_bordered_input",
    description:
      "This is a bottom-bordered input text field. Enter your information here for it to be processed accordingly.",
    reactCode: `<input
  type="text" 
  name="name" 
  id="name" 
  placeholder="Your name" 
  className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300"
/>`,
    vueCode: ``,
  },
  {
    id: 3,
    headText: "animate label input",
    headId: "animate_label_input",
    description:
      "This is an animated label text input field. Enter your data here, and the label will animate accordingly.",
    reactCode: `<label className="relative w-[80%]">
    <input type="text" name="name" id="name" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
    />
    <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
      Your name
    </span>
  </label>`,
    vueCode: ``,
  },
];
