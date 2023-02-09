import React, { Component } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    return (
      <div>
        <button
          className="mantine-ActionIcon-transparent mantine-ActionIcon-root fixed bottom-10 right-10 cursor-pointer items-center mantine-h0xhke p-3 dark:!bg-sky-600 rounded-full"
          style={{ background: "#6d28d9" }}
          type="button"
          onClick={this.scrollToTop}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="text-white "
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            ></path>
          </svg>
        </button>
      </div>
    );
  }
}
