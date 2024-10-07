export const showData = {
  func: `  const handlePrimaryInputPreview = () => {
    setPrimaryInputPreview(true);
    setPrimaryInputCode(false);
  };

  const handlePrimaryInputCode = () => {
    setPrimaryInputCode(true);
    setPrimaryInputPreview(false);
  };`,
  states: `const [primaryInputPreview, setPrimaryInputPreview] = useState(true);
  const [primaryInputCode, setPrimaryInputCode] = useState(false);`,
  code: ` <div className="w-[80%]">
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
    </div>`,
};
