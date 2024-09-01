import React from "react";
import Side from "./components/Side";
import Chat from "./components/Chat";

export default function Assistant() {
  return (
    <div className="assistant">
      <Chat />
      <Side />
    </div>
  );
}
