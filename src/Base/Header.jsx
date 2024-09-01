import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "Components/Search";
import { chevronBottom, infoIcon, starIcon } from "./SVG";

export default function Header({ setShowSide, showSide }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSide(false);
    document.body.classList.remove("active");
  }, [location]);
  useEffect(() => {
    if (showSide) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [showSide]);
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner-side">
          <h1>Alerts</h1>
          <Search />
        </div>
        <div className="header__inner-side">
          <div className="header__inner-ai">{starIcon}</div>
          <button className="header__inner-info">{infoIcon}</button>
          <div className="profile">
            <div className="profile__avatar">
              <img src="/images/avatar.png" alt="" />
            </div>
            <div className="profile__name">
              <p>
                Jack Joe
                {chevronBottom}
              </p>
              <a href="mailto:jackjoe@email.com">jackjoe@email.com</a>
            </div>
          </div>
          <div
            className={"burger " + (showSide ? "active" : "")}
            id="showSideBtn"
            onClick={() => {
              setShowSide(!showSide);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
