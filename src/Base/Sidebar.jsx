import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  alertIcon,
  assistantIcon,
  chevronRight,
  customerIcon,
  messageIcon,
  notebookIcon,
  reportIcon,
} from "./SVG";

export default function Sidebar({ showSide, setShowSide }) {
  const location = useLocation();

  const onClose = (e) => {
    if (e.target === e.currentTarget) {
      setShowSide(false);
    }
  };
  useEffect(() => {
    setShowSide(false);
  }, [location]);
  return (
    <aside className={`sidebar ${showSide ? " active" : ""}`} onClick={onClose}>
      <div className="sidebar__inner">
        <div className="sidebar__top">
          <div className="sidebar__logo">
            <img src="/images/logo.png" alt="" />
          </div>
          <ul className="sidebar__links">
            <li>
              <NavLink to="/" className="sidebar__link">
                {alertIcon}
                Alerts
              </NavLink>
            </li>
            <li>
              <NavLink to="/assistant" className="sidebar__link">
                {assistantIcon}
                AI Assistant
              </NavLink>
            </li>
            <li>
              <NavLink to="/reports" className="sidebar__link">
                {reportIcon}
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink to="/notebook" className="sidebar__link">
                {notebookIcon}
                Notebook
              </NavLink>
            </li>
            <li>
              <NavLink to="/customers" className="sidebar__link">
                {customerIcon}
                Customers
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__foot">
          <Link to="/settings" className="sidebar__link">
            {messageIcon}
            Setting
            <span>{chevronRight}</span>
          </Link>
          <Link to="/help" className="sidebar__link">
            {messageIcon}
            Help
            <span>{chevronRight}</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
