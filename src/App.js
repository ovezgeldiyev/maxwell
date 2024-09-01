import React, { useEffect, useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Sidebar from "./Base/Sidebar";
import Alerts from "./Pages/Alerts/Alerts";
import Reports from "./Pages/Reports/Reports";
import Assistant from "./Pages/Assistant/Assistant";

export default function App() {
  const [showSide, setShowSide] = useState(false);
  const { pathname } = useLocation();
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header setShowSide={setShowSide} showSide={showSide} />
      <Sidebar
        setShowSide={setShowSide}
        showSide={showSide}
        active={sidebar}
        setActive={setSidebar}
      />
      <main className="main">
        <Routes>
          <Route
            path=""
            element={<Alerts sidebar={sidebar} setSidebar={setSidebar} />}
          />
          <Route
            path="/assistant"
            element={<Assistant sidebar={sidebar} setSidebar={setSidebar} />}
          />
          <Route
            path="/reports"
            element={<Reports sidebar={sidebar} setSidebar={setSidebar} />}
          />
        </Routes>
      </main>
    </>
  );
}
