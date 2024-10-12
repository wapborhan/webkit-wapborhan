import Badge from "@/components/shared/Badge";
import { componentsData } from "@/utils/sidebarData";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-primary text-3xl font-bold">All Components</h1>
      </div>
      {componentsData.map((item) => {
        return (
          <>
            <div
              className={`sectionHeaders  tracking-widest font-[500] hover:font-[500] relative uppercase !text-[1rem] text-primary border-b mt-10 mb-3`}
              key={item.id}
            >
              {item.name}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {item?.components.map(({ id, title, link, badge }) => {
                return (
                  <div key={id}>
                    <Link
                      href={`/components/${link}`}
                      className={`flex rounded-md items-center gap-[10px] hover:bg-slate-200 hover:text-black p-2 bg-slate-100`}
                    >
                      {title}
                      {badge && <Badge title={badge} />}
                      {/*  */}
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Page;
