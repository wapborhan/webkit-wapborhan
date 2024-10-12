import CompCard from "@/components/shared/CompCard";
import ContentHeader from "@/components/shared/ContentHeader";
import InstallCode from "@/components/shared/InstallCode";
import ShowCode from "@/components/shared/ShowCode";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";

const compData = {
  id: 1,
  headText: "Use Components",
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
};

const page = () => {
  return (
    <aside className="w-full 640px:pl-[2.5rem] px-6 640px:px-10">
      <h1 className="font-[600] pt-0  text-[2.5rem] 1024px:text-[3rem] uppercase bg-clip-text text-transparent bg-gradient-to-r from-danger to-primary">
        Usage
      </h1>
      <p className="w-full text-text text-[1rem]">
        Learn the basics of working with WeBkity UI components.
      </p>

      <div className="mt-8 w-full text-text">
        <ContentHeader text={"Installation"} />
        <p className="mt-3 mb-6">
          Install Tailwind CSS, the {"world's"} most popular css framework.
        </p>
      </div>

      <ContentHeader text={"Default installation"} />

      <p>
        Run one of the following commands to add Material UI to your project:
      </p>
      <div className="mt-8 w-full text-text">
        <TabGroup className="w-full mt-5">
          <div className="425px:w-[80%] 1024px:w-full border border-border rounded mt-8">
            <TabList>
              <Tab className="data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-danger  px-6 py-2 border-r z-[2] relative text-text border-b rounded-tl border-border outline-none">
                Install Tailwind CSS
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="min-h-[60px]">
                  <InstallCode
                    height="60"
                    code={"npm install -D tailwindcss postcss autoprefixer"}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
        <TabGroup className="w-full mt-5">
          <div className="425px:w-[80%] 1024px:w-full border border-border rounded mt-8">
            <TabList>
              <Tab className="data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-danger  px-6 py-2 border-r z-[2] relative text-text border-b rounded-tl border-border outline-none">
                Initialized Tailwind CSS
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="min-h-[60px]">
                  <InstallCode height="60" code={"npx tailwindcss init -p"} />
                </div>
              </TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
      </div>

      <div className="mt-8 w-full text-text">
        <ContentHeader text={"Configure your template paths"} />
        <TabGroup className="w-full mt-5">
          <div className="425px:w-[80%] 1024px:w-full border border-border rounded mt-8">
            <TabList>
              <Tab className="data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-danger  px-6 py-2 border-r z-[2] relative text-text border-b rounded-tl border-border outline-none">
                tailwind.config.js
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="min-h-[60px]">
                  <InstallCode
                    height="150"
                    code={`
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
                    `}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
      </div>

      <div className="mt-8 w-full text-text">
        <ContentHeader text={"Add the Tailwind directives to your CSS"} />
        <TabGroup className="w-full mt-5">
          <div className="425px:w-[80%] 1024px:w-full border border-border rounded mt-8">
            <TabList>
              <Tab className="data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-danger  px-6 py-2 border-r z-[2] relative text-text border-b rounded-tl border-border outline-none">
                index.css
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="min-h-[60px]">
                  <InstallCode
                    height="150"
                    code={`
@tailwind base;
@tailwind components;
@tailwind utilities;
                    `}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
      </div>

      <CompCard compData={compData}>
        <div className="w-full 1024px:w-[80%]">
          <label htmlFor="name" className="text-[15px] text-text font-[400]">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>
      </CompCard>

      <div className="w-6/12 mx-auto text-white flex justify-center items-center py-2 px-8 bg-danger my-4 rounded-lg border-2 border-primary">
        <Link href="/components/all">All Components</Link>
      </div>

      {/* <BlocksFooter/> */}
    </aside>
  );
};

export default page;
