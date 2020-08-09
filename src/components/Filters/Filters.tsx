import React from "react";

import "./Filters.scss";

import AdjustIcon from "../../assets/icons/ajust.svg";

function Filters() {
  return (
    <div className="filters">
      <input
        type="text"
        name="search"
        placeholder="Search for contact lists / groups"
      />
      <div className="filters__range">
        <p>Filter</p>
        <img src={AdjustIcon} alt="adjust icon"/>
      </div>
    </div>
  );
}

export default Filters;
