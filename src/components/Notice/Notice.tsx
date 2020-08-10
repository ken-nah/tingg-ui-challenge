import React from "react";

import "./Notice.scss";

import DeniedIcon from "../../assets/icons/denied.svg";

function Notice() {
  return (
    <div className="notice">
      <div className="notice__content">
          <h2>POLITE NOTICE</h2>
        <img src={DeniedIcon} alt="denied icon" />
        <p>
          Unfortunately this dashboard is not accessible on mobile or tablet
          devices. Can only be viewed on laptop, desktop or large screens
        </p>
      </div>
    </div>
  );
}

export default Notice;
