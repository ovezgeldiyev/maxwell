import React from "react";
import { arrowUp } from "Base/SVG";

export default function Status() {
  return (
    <div className="alerts__top">
      <div className="alertsItem">
        <div className="alertsItem__row">
          <span style={{ backgroundColor: "#E40606" }}></span>
          <h3>8</h3>
          <p className="sm">Priority 1</p>
        </div>
        <div className="alertsItem__info increase up">
          {arrowUp}
          <p className="sm">16% last week</p>
        </div>
      </div>
      <div className="alertsItem">
        <div className="alertsItem__row">
          <span style={{ backgroundColor: "#F7931F" }}></span>
          <h3>22</h3>
          <p className="sm">Priority 2</p>
        </div>
        <div className="alertsItem__info up">
          {arrowUp}
          <p className="sm">42% last week</p>
        </div>
      </div>
      <div className="alertsItem">
        <div className="alertsItem__row">
          <span style={{ backgroundColor: "#EFE705" }}></span>
          <h3>12</h3>
          <p className="sm">Priority 3</p>
        </div>
        <div className="alertsItem__info decrease down">
          {arrowUp}
          <p className="sm">41% last week</p>
        </div>
      </div>
    </div>
  );
}
