import CompCard from "@/components/shared/CompCard";

const BottomBorder = ({ compData }) => {
  return (
    <>
      <CompCard compData={compData}>
        <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className="border-border border-b outline-none px-4 w-full 1024px:w-[80%] py-3 focus:border-primary transition-colors duration-300"
          />
        </div>
      </CompCard>
    </>
  );
};

export default BottomBorder;
