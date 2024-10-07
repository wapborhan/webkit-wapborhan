import Input from "./input";

const ComponentDetails = ({ pathName }) => {
  const renderComponent = () => {
    switch (pathName) {
      case "input-text":
        return <Input />;
      default:
        return <p>Component not found</p>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default ComponentDetails;
