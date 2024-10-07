import Input from "./input";

const ComponentDetails = ({ pathName }) => {
  return (
    <div>
      {pathName === "input-text" && (
        <>
          <Input />
        </>
      )}
    </div>
  );
};

export default ComponentDetails;
