import CompCard from "@/components/shared/CompCard";

const Required = ({ compData }) => {
  return (
    <>
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
    </>
  );
};

export default Required;
