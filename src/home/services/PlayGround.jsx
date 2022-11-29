import React from "react";

const PlayGround = () => {
  return (
    <div className="container flex flex-col gap-10 lg:flex-row lg:gap-20">
      <div className="gradient-primary rounded-1 shadow-1 border-general relative mx-auto  border bg-white p-8 dark:bg-slate-800/[0.6] xl:max-w-6xl ">
        <div className="catt-title mb-10">
          <h3>
            Some <span className="txt-success">Projects</span> I've Build By
          </h3>
          <div className="text-right">
            <a className="rn-btn btn-brd mr--30">
              <span>React</span>
            </a>
          </div>
        </div>
        <div className="grid w-full gap-4 lg:grid-cols-3">
          <div className="border-general rounded-1  bg-0 border p-8 transition-all shadow">
            <div className="bg-orange-600 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
              {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                  <img
                    style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                  />
                </span>
                <img
                  alt="বেসিক HTML"
                  src="/_next/static/media/html5.413279f8.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  srcset="/_next/static/media/html5.413279f8.svg 1x, /_next/static/media/html5.413279f8.svg 2x"
                />
              </span> */}
            </div>
            <h2 className="text-normal text-0 mx-0 mb-0 mt-2 box-border border-0 border-solid border-gray-200 text-center font-medium">
              বেসিক HTML
            </h2>
            <p className="text-small text-1 mt-2 text-center">
              HTML সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
            </p>
            <div className="mt-4 text-center">
              <a
                className="mantine-Button-outline mantine-Button-root mantine-7a5dwr"
                type="button"
                href="https://www.w3schools.com/html/"
                target="_blank"
              >
                <div className="mantine-3xbgk5 mantine-Button-inner">
                  <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                  <span className="mantine-qo1k2 mantine-Button-label">
                    এখান থেকে শিখুন
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="border-general rounded-1  bg-0 border p-8 transition-all shadow">
            <div className="bg-blue-500 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
              {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                  <img
                    style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                  />
                </span>
                <img
                  alt="বেসিক CSS"
                  src="/_next/static/media/css.ca950bea.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  srcset="/_next/static/media/css.ca950bea.svg 1x, /_next/static/media/css.ca950bea.svg 2x"
                />
              </span> */}
            </div>
            <h2 className="text-normal text-0 mx-0 mb-0 mt-2 box-border border-0 border-solid border-gray-200 text-center font-medium">
              বেসিক CSS
            </h2>
            <p className="text-small text-1 mt-2 text-center">
              CSS সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
            </p>
            <div className="mt-4 text-center">
              <a
                className="mantine-Button-outline mantine-Button-root mantine-7a5dwr"
                type="button"
                href="https://www.w3schools.com/css/default.asp"
                target="_blank"
              >
                <div className="mantine-3xbgk5 mantine-Button-inner">
                  <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                  <span className="mantine-qo1k2 mantine-Button-label">
                    এখান থেকে শিখুন
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="border-general rounded-1  bg-0 border p-8 transition-all shadow">
            <div className="bg-yellow-400 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
              {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                  <img
                    style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                  />
                </span>
                <img
                  alt="বেসিক ও মডার্ন JavaScript"
                  src="/_next/static/media/javascript.452e2fce.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  srcset="/_next/static/media/javascript.452e2fce.svg 1x, /_next/static/media/javascript.452e2fce.svg 2x"
                />
              </span> */}
            </div>
            <h2 className="text-normal text-0 mx-0 mb-0 mt-2 box-border border-0 border-solid border-gray-200 text-center font-medium">
              বেসিক ও মডার্ন JavaScript
            </h2>
            <p className="text-small text-1 mt-2 text-center">
              বেসিক ও মডার্ন JavaScript সম্পর্কে ধারণা থাকতে হবে।
            </p>
            <div className="mt-4 text-center">
              <a
                className="mantine-Button-outline mantine-Button-root mantine-7a5dwr"
                type="button"
                href="https://lwsbd.link/startjs"
                target="_blank"
              >
                <div className="mantine-3xbgk5 mantine-Button-inner">
                  <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                  <span className="mantine-qo1k2 mantine-Button-label">
                    এখান থেকে শিখুন
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="border-general rounded-1  bg-0 border p-8 transition-all shadow">
            <div className="bg-secondary1 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
              {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                  <img
                    style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                  />
                </span>
                <img
                  alt="বেসিক React.js"
                  src="/_next/static/media/react.eb7fa0ae.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  srcset="/_next/static/media/react.eb7fa0ae.svg 1x, /_next/static/media/react.eb7fa0ae.svg 2x"
                />
              </span> */}
            </div>
            <h2 className="text-normal text-0 mx-0 mb-0 mt-2 box-border border-0 border-solid border-gray-200 text-center font-medium">
              বেসিক React.js
            </h2>
            <p className="text-small text-1 mt-2 text-center">
              React.js সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
            </p>
            <div className="mt-4 text-center">
              <a
                className="mantine-Button-outline mantine-Button-root mantine-7a5dwr"
                type="button"
                href="https://lwsbd.link/react"
                target="_blank"
              >
                <div className="mantine-3xbgk5 mantine-Button-inner">
                  <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                  <span className="mantine-qo1k2 mantine-Button-label">
                    এখান থেকে শিখুন
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="border-general rounded-1  bg-0 border p-8 transition-all shadow">
            <div className="bg-slate-700 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
              {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                  <img
                    style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                  />
                </span>
                <img
                  alt="বেসিক Git/GitHub"
                  src="/_next/static/media/github.2fd17350.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  srcset="/_next/static/media/github.2fd17350.svg 1x, /_next/static/media/github.2fd17350.svg 2x"
                />
              </span> */}
            </div>
            <h2 className="text-normal text-0 mx-0 mb-0 mt-2 box-border border-0 border-solid border-gray-200 text-center font-medium">
              বেসিক Git/GitHub
            </h2>
            <p className="text-small text-1 mt-2 text-center">
              Git/GitHub সম্পর্কে প্রাথমিক ধারণা থাকতে হবে।
            </p>
            <div className="mt-4 text-center">
              <a
                className="mantine-Button-outline mantine-Button-root mantine-7a5dwr"
                type="button"
                href="https://www.youtube.com/watch?v=oe21Nlq8GS4"
                target="_blank"
              >
                <div className="mantine-3xbgk5 mantine-Button-inner">
                  <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                  <span className="mantine-qo1k2 mantine-Button-label">
                    এখান থেকে শিখুন
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="border-general rounded-1  bg-0 border p-8 transition-all shadow">
            <div className="bg-sky-600 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
              {/* <span style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">
                <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                  <img
                    style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2732%27%20height=%2732%27/%3e"
                  />
                </span>
                <img
                  alt="VS Code এডিটর"
                  src="/_next/static/media/vscode.e7a15723.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                  srcset="/_next/static/media/vscode.e7a15723.svg 1x, /_next/static/media/vscode.e7a15723.svg 2x"
                />
              </span> */}
            </div>
            <h2 className="text-normal text-0 mx-0 mb-0 mt-2 box-border border-0 border-solid border-gray-200 text-center font-medium">
              VS Code এডিটর
            </h2>
            <p className="text-small text-1 mt-2 text-center">
              VS Code এডিটরে কাজ করার অভ্যাস থাকতে হবে।
            </p>
            <div className="mt-4 text-center">
              <a
                className="mantine-Button-outline mantine-Button-root mantine-7a5dwr"
                type="button"
                href="https://www.youtube.com/watch?v=VqCgcpAypFQ"
                target="_blank"
              >
                <div className="mantine-3xbgk5 mantine-Button-inner">
                  <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                  <span className="mantine-qo1k2 mantine-Button-label">
                    এখান থেকে শিখুন
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
