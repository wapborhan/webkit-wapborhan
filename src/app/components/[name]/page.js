import ComponentDetails from "@/pages/component/ComponentDetails";
import Contex from "@/pages/component/Contex";

const page = ({ params }) => {
  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <ComponentDetails pathName={params.name} />
        <Contex />
      </aside>
    </>
  );
};

export default page;
