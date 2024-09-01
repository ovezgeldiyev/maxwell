import React from "react";
import { CopyIcon, dotsIcon, reloadIcon, shareIcon } from "Base/SVG";

export default function AiMessage2() {
  return (
    <div className="message ai big">
      <div className="message__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="messageContent">
        <div className="messageContent__top">
          <div className="messageContent__info">
            <div className="messageContent__info">Maxwell</div>
            <hr />
            <div className="messageContent__time">message</div>
          </div>
          <div className="messageContent__tools">
            <button type="button">{reloadIcon}</button>
            <button type="button">{CopyIcon}</button>
            <button type="button">{shareIcon}</button>
            <button type="button">{dotsIcon}</button>
          </div>
        </div>
        <div className="messageContent__text">
          <p>
            <b className="big">Incident Overview</b>
            <br /> <br />
            <b>Incident Date and Time:</b>
            7/23/24 <br />
            <b>Area:</b>Wellhead Christmas Tree
            <br />
            <b>Alarm Name:</b>Low PSI <br />
            <b>Alarm Details:</b> The wellhead Christmas tree exhibited low PSI,
            causing concerns about potential operational issues.
            <br />
            <br />
            <b className="big">Incident Description:</b>
            <br />
            <br />
            On 7/23/24, an alarm was triggered due to low PSI at the wellhead
            Christmas tree. Initial sensor readings showed a wellhead pressure
            of 300 psi, wellhead temperature of 160°F, master valve position as
            open, a flow rate of 90 scf/day, and a differential pressure across
            the valve of 8 psi.
            <br />
            <br />
            <b>Diagnostic Findings</b>
            <br />
            <br />
            The diagnostic analysis involved evaluating multiple potential
            causes:
            <br />
            <br />
            <b>1. Master Valve Stuck in Position:</b>
            The master valve was functioning correctly, as indicated by the
            consistent flow rate and valve position.
            <br />
            <br />
            <b>2. Debris or Scale Build-up: </b>
            Although there was a minor indication of potential debris or scale
            build-up, it was not significant enough to account for the low PSI.
            <br />
            <br />
            <b>3. Hydraulic Actuator Malfunction:</b>
            The hydraulic actuator was functioning normally, with normal
            hydraulic pressure and no error status.
            <br />
            <br />
            <b>4. Low Reservoir Pressure Below Ground: </b>
            The wellhead pressure was significantly lower than the historical
            reservoir pressure, indicating a possible low reservoir pressure
            below ground.
            <br />
            <br />
            <b>Conclusion:</b>
            The primary cause of the low PSI at the wellhead Christmas tree was
            identified as low reservoir pressure below ground. This was
            supported by the current wellhead pressure being much lower than the
            historical reservoir pressure. Corrective
            <br />
            <br />
            <b>Actions Reservoir Pressure Support:</b>
            Implement pressure support techniques such as water injection or gas
            re-injection to increase reservoir pressure.
            <br />
            <b>Flow Rate Adjustment:</b>
            Optimize the gas flow rate to maintain stable wellhead pressure.
            <br />
            <b>Regular Monitoring:</b>
            Continuously monitor wellhead and reservoir pressures to anticipate
            and mitigate similar issues in the future
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
