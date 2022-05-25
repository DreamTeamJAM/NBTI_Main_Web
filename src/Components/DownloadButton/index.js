import React from "react";
import "./styles.css";

function DownloadButton({ children }) {
  return (
    <>
      <button className="button">
        <span className="button_lg">
          <span className="button_sl"></span>
          <span className="button_text"> {children} </span>
        </span>
      </button>
    </>
  );
}

export default DownloadButton;
