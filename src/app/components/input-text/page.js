import Animated from "./Animated";
import BottomBorder from "./BottomBorder";
import Icon from "./Icon";
import Required from "./Required";
import { componentData } from "./componentData";
import Contex from "@/pages/component/Contex";

const Index = () => {
  return (
    <>
      <aside className="flex items-start justify-between gap-4 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div className="w-[75%]">
          <Required compData={componentData[0]} />
          <BottomBorder compData={componentData[1]} />
          <Animated compData={componentData[2]} />
          <Icon compData={componentData[3]} />
        </div>
        <Contex data={componentData} />
      </aside>
    </>
  );
};

export default Index;
