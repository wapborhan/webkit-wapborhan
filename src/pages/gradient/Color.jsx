import React from "react";

const Color = (props) => {
  return (
    <div className="color">
      <h2 className="text-dark dark:text-white mb-2">Choose Color</h2>

      <div className="flex">
        <div className="d-flex justify-content-between w-100 mb-2">
          {/* <div className="h5 w-25">Color 1</div> */}
          <input
            type="color"
            //   ref={hex}
            defaultValue={props.color1}
            // Value={props.color1}
            // style={props.icolor1}
            className="rounded text-center w-25 p-0"
            name="hex"
            // onChange={(e) => props.setColor1(e.target.value)}
            onChange={props.handleChangeColor1}
          />
          <input
            type="text"
            className="w-50 bg-white dark:bg-slate-800 dark:text-white "
            // style={props.icolor1}
            value={props.color1}
            // onChange={(e) => props.setColor1(e.target.value)}
            onChange={props.handleChangeColor1}
          />
        </div>

        <div className="d-flex justify-content-between">
          {/* <div className="w-25 h5">Color 2</div> */}
          <input
            type="color"
            // ref={hex2}
            defaultValue={props.color2}
            style={props.icolor2}
            className="rounded w-25 text-center p-0"
            name="hex2"
            // onChange={(e) => props.setColor2(e.target.value)}
            onChange={props.handleChangeColor2}
          />
          <input
            type="text"
            className="w-50 bg-white dark:bg-slate-800 dark:text-white "
            // style={props.icolor2}
            value={props.color2}
            // onChange={(e) => props.setColor2(e.target.value)}
            onChange={props.handleChangeColor2}
          />
        </div>
      </div>
      <div className="text-dark text-center rounded   text-white w-40 mx-auto">
        {props.error ? (
          <h5 className=" bg-red-600 px-3 -y-1 rounded text-danger">
            {props.error}
          </h5>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Color;
