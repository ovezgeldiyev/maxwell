import React from "react";

export default function Side() {
  return (
    <div className="alerts__side">
      <h2>View Details</h2>
      <ul>
        <li>
          <p>Alarm Name:</p>
          <p>High Vibration</p>
        </li>
        <li>
          <p>Alarm Status:</p>
          <p>Possible leak in the system</p>
        </li>
        <li>
          <p>Area:</p>
          <p>Separator</p>
        </li>
        <li>
          <p>Severity:</p>
          <p>Medium</p>
        </li>
        <li>
          <p>% Started</p>
          <p>57%</p>
        </li>
        <li>
          <p>Date:</p>
          <p>07/23/21</p>
        </li>
        <li>
          <p>Time:</p>
          <p>19:20</p>
        </li>
      </ul>
      <div className="alerts__side-foot">
        <a href="#" className="button primary">
          Solve It
        </a>
      </div>
    </div>
  );
}
