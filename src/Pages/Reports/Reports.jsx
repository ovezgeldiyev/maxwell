import React, { useState } from "react";
import {
  attachIcon,
  gridIcon,
  microphoneIcon,
  photoIcon,
  plusIcon,
  searchIcon,
  sendIcon,
} from "Base/SVG";
import AiMessage2 from "Components/AiMessage2";
import Table from "./Table";

export default function Reports() {
  const [tab, setTab] = useState("all");
  return (
    <div className="assistant">
      <div className="assistant__row">
        <div className="assistant__col">
          <div className="assistantInfo">
            <div className="assistantInfo__top">
              <h6>Reports List</h6>
              <div className="assistantInfo__row">
                <div className="assistantInfo__tabs">
                  <div className="assistantInfo__tabs-row">
                    <button
                      onClick={() => setTab("all")}
                      type="button"
                      className={tab === "all" ? "active" : ""}
                    >
                      All Reports
                    </button>
                    <button
                      onClick={() => setTab("active")}
                      type="button"
                      className={tab === "active" ? "active" : ""}
                    >
                      Active
                    </button>
                    <button
                      onClick={() => setTab("completed")}
                      type="button"
                      className={tab === "completed" ? "active" : ""}
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => setTab("progress")}
                      type="button"
                      className={tab === "progress" ? "active" : ""}
                    >
                      In progress
                    </button>
                  </div>
                </div>
                <div className="search">
                  {searchIcon}
                  <input type="search" placeholder="Search for Status" />
                </div>
              </div>
            </div>
            <Table />
          </div>
          <div className="chat big">
            <div className="chat__head">
              <div className="chat__head-title">
                <h1>AI Assistant</h1>
                <div className="chat__head-tag">Version 1.0</div>
              </div>
              <button type="button" className="button secondary">
                {plusIcon}
                New Chat
              </button>
            </div>
            <div className="chat__body">
              <AiMessage2 />
            </div>
            <div className="chatPrompt">
              <div className="chatPrompt__inner">
                <input type="text" placeholder="Chat Here..." />
                <div className="chatPrompt__buttons">
                  <div className="chatPrompt__tools">
                    <button type="button">{attachIcon}</button>
                    <button type="button">{microphoneIcon}</button>
                    <button type="button">{photoIcon}</button>
                    <button type="button">{gridIcon}</button>
                  </div>
                  <hr />
                  <button type="submit" className="button primary">
                    {sendIcon}
                    <span>Generate Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assistantSide">
          <div className="assistantSide__top">
            <div className="assistantSide__title">
              <h4>Training:</h4>
            </div>
            <div className="assistantSide__info sm">
              <h6>Incident Metadata:</h6>
              <ul className="assistantSide__list">
                <li>
                  <p>Date:</p>
                  <p>2024-07-23</p>
                </li>
                <li>
                  <p>Area:</p>
                  <p>Wellhead Christmas Tree</p>
                </li>
                <li>
                  <p>Alarm Name:</p>
                  <p>Low PSI</p>
                </li>
                <li>
                  <p>Alarm Detail:</p>
                  <p>The wellhead Christmas tree exhibited low PSI</p>
                </li>
              </ul>
            </div>
            <div className="assistantSide__info">
              <h6>Initial Sensor Readings:</h6>
              <ul className="assistantSide__list">
                <li>
                  <p>o Vibration Level:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Inlet Pressure:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Outlet Pressure:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Temperature:</p>
                  <p>160°F</p>
                </li>
                <li>
                  <p>o Wellhead Pressure: </p>
                  <p>300 psi</p>
                </li>
                <li>
                  <p>o Flow Rate:</p>
                  <p>90 scf/day</p>
                </li>
                <li>
                  <p>o Differential Pressure Across Valve:</p>
                  <p> 8 psi</p>
                </li>
              </ul>
            </div>
            <div className="assistantSide__info sm">
              <h6>Diagnostic Findings:</h6>
              <ul className="assistantSide__list">
                <li>
                  <p>Root Cause:</p>
                  <p>Low reservoir pressure below ground</p>
                </li>
                <li>
                  <p>Issues Identified:</p>
                  <p>
                    Historical reservoir pressure significantly higher than
                    current wellhead pressure
                  </p>
                </li>
              </ul>
            </div>
            <div className="assistantSide__info sm">
              <h6>Corrective Actions:</h6>
              <ul className="assistantSide__list">
                <li>
                  <p>Actions Taken:</p>
                  <p>
                    Recommended pressure support techniques, optimized gas flow
                    rate, established continuous monitoring
                  </p>
                </li>
              </ul>
            </div>
            <div className="assistantSide__info">
              <h6>Post-Repair Sensor Readings:</h6>
              <ul className="assistantSide__list">
                <li>
                  <p>o Vibration Level:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Inlet Pressure:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Outlet Pressure:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Temperature:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Wellhead Pressure: </p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>o Flow Rate:</p>
                  <p>90 scf/day</p>
                </li>
                <li>
                  <p>o Differential Pressure Across Valve:</p>
                  <p>N/A</p>
                </li>
              </ul>
            </div>
            <div className="assistantSide__info sm">
              <h6>Preventive Measures:</h6>
              <ul className="assistantSide__list">
                <li>
                  <p>Monitoring:</p>
                  <p>Continuously monitor wellhead and reservoir pressures</p>
                </li>
                <li>
                  <p>Inlet Pressure:</p>
                  <p>N/A</p>
                </li>
                <li>
                  <p>Maintenance</p>
                  <p>Optimize gas flow rate</p>
                </li>
                <li>
                  <p>Training:</p>
                  <p>Implement pressure support techniques</p>
                </li>
              </ul>
            </div>
          </div>
          <form className="assistantSide__foot">
            <div className="input">
              <input type="text" placeholder="How can I help you?" />
              <button type="submit">{sendIcon}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
