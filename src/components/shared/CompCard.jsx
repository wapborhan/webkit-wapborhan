import ContentHeader from "@/components/shared/ContentHeader";
import ShowCode from "@/components/shared/ShowCode";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const CompCard = ({ children, compData }) => {
  const { headText, headId, description, reactCode, vueCode } = compData;
  return (
    <TabGroup className="w-full mt-5">
      <ContentHeader text={headText} id={headId} />

      <p className="w-full 425px:w-[80%] text-text text-[1rem]">
        {description}
      </p>

      <div className="425px:w-[80%] 1024px:w-full border border-border rounded mt-8">
        <div className="relative"></div>
        <TabList>
          <Tab className="data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-danger  px-6 py-2 border-r z-[2] relative text-text border-b rounded-tl border-border outline-none">
            Preview
          </Tab>
          <Tab className="data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-danger   px-6 py-2 border-r z-[2] relative text-text border-b  border-border outline-none">
            React
          </Tab>
          <Tab className="data-[selected]:bg-primary data-[selected]:text-white data-[hover]:bg-danger   px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border outline-none">
            Vue
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="p-8 mb-4  min-h-[300px]">{children}</div>
          </TabPanel>
          <TabPanel>
            <div className="min-h-[300px]">
              <ShowCode code={reactCode} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="min-h-[300px]">
              <ShowCode code={vueCode} />
            </div>
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  );
};

export default CompCard;
