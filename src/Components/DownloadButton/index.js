import React from "react";
import "./styles.css";

function DownloadButton({ children }) {
  return (
    <>
      <button class="button">
        <span class="button_lg">
          <span class="button_sl"></span>
          <span class="button_text"> {children} </span>
        </span>
      </button>
    </>
  );
}

export default DownloadButton;
