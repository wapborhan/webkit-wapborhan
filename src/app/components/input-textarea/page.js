import { componentData } from "./data";
import Contex from "@/pages/component/Contex";
import List from "./List";

const Index = () => {
  return (
    <>
      <aside className="flex items-start justify-between gap-4 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div className="w-[75%]">
          <List compData={componentData} />
        </div>
        <Contex data={componentData} />
      </aside>
    </>
  );
};

export default Index;
