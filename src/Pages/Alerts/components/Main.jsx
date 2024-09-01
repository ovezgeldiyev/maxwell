import React from "react";
import { searchIcon } from "Base/SVG";
import Map from "./Map";
import Table from "./Table";

export default function Main() {
  return (
    <div className="alerts__main">
      <Map />
      <div className="alerts__info">
        <div className="alerts__info-top">
          <h6>Alarms List</h6>
          <div className="search">
            {searchIcon}
            <input type="search" placeholder="Search for Status" />
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}
