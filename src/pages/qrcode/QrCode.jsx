"use client";
import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [url, setUrl] = useState("");

  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#ffffff"}
      level={"H"}
    />
  );

  return (
    <div className=" ">
      <div className="container">
        <div className="flex justify-center items-center pb-5 pt-5 w-full">
          <form onSubmit={downloadQRCode}>
            <div className="input flex mb-6 ">
              <label className="basis-1/2 items-center flex dark:text-black">
                Enter URL
              </label>
              <input
                type="text"
                value={url}
                onChange={qrCodeEncoder}
                placeholder="https://google.com"
                className="basis-2/2 w-full border-2 border-grey-500 p-2 rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="qr-code flex flex-col gap-5 justify-center items-center mt-8 pb-8">
          <div
            className="block dark:bg-white shadow-md rounded-r-md p-5"
            ref={qrRef}
          >
            {qrcode}
          </div>
          <button
            type="submit"
            disabled={!url}
            className="block btn bg-green-700 px-8 py-5 w-3/12 rounded-md text-1xl text-white"
          >
            Download QR code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
