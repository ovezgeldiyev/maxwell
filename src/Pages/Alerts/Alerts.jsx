import React from "react";
import Side from "./components/Side";
import Main from "./components/Main";
import Status from "./components/Status";

export default function Alerts() {
  return (
    <div className="alerts">
      <Status />
      <div className="alerts__row">
        <Main />
        <Side />
      </div>
    </div>
  );
}
