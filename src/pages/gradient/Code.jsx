import React from "react";

const Code = (props) => {
  return (
    <div className="card">
      <div className="card-body break-all mt-4 p-2  outline-0">
        <div className="copycode ">
          <form>
            <textarea
              // disabled
              className="box w-100 text-dark break-all p-2 mb-2"
              ref={props.textAreaRef}
              value={"background-image: " + props.cssCode}
            />
          </form>
          <div>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={props.copyToClipboard}
            >
              Copy Code
            </button>
            {props.copySuccess}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
