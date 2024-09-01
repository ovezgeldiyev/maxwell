import React from "react";
import { searchIcon } from "Base/SVG";

export default function Search() {
  return (
    <div className="search">
      {searchIcon}
      <input type="search" placeholder="Search alert history" />
    </div>
  );
}
