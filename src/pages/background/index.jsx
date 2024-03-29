import React, { Component } from "react";
import BACKGROUND_DATA from "./backgrounddata";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.textAreaRef = React.createRef();
    this.state = {
      hoverButton: BACKGROUND_DATA,
      copySuccess: "",
    };
  }

  // const textAreaRef = useRef(null);
  render() {
    function copyToClipboard(e) {
      // this.textAreaRef.current.select();
      // document.execCommand("copy");

      // e.target.focus();
      this.setState({
        copySuccess: "Copied",
      });
    }
    return (
      <div className="backsr dark:bg-[#0B1120]  dark:bg-none">
        <div className="container topbarpt">
          <div className="grid w-full gap-4 lg:grid-cols-4">
            {this.state.hoverButton.map((item) => {
              const code = item.code;
              return (
                <div className="col-md-4" key={item.id}>
                  <div className="card mt-3">
                    <div className="border-general rounded-1  border p-4 transition-all shadow">
                      <div
                        className="backgroundsr text-light w-100"
                        style={{
                          background: `${item.code}`,
                        }}
                      >
                        {/* {item.text} */}
                      </div>
                    </div>
                    {/* <div className="copy d-flex justify-content-end">
                    <form>
                      <textarea
                        ref={this.textAreaRef}
                        value={"background-image: " + item.code}
                      ></textarea>
                    </form>
                    {this.copySuccess}
                    <button
                      className="btn h6 btn-dark rounded-pill me-3 mb-3"
                      onClick={(e) => this.copyToClipboard}
                    >
                      COPY
                    </button>
                  </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
