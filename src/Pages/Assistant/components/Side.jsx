import React from "react";
import { sendIcon } from "Base/SVG";

export default function Side() {
  return (
    <div className="assistantSide">
      <div className="assistantSide__top">
        <div className="assistantSide__logo">
          <img src="/images/ediston.png" alt="" />
        </div>
        <div className="assistantSide__item">
          <h4>Alarm:</h4>
          <p className="sm">
            On 7/23/24 at 23:44, an alarm for low PSI at the wellhead Christmas
            tree was generated.
          </p>
        </div>
        <div className="assistantSide__item">
          <h4>Root Cause:</h4>
          <p className="sm">
            The primary cause is low reservoir pressure below ground, as
            indicated by the current wellhead pressure being significantly lower
            than historical reservoir pressure
          </p>
        </div>
        <div className="assistantSide__item">
          <h4>Recommend Fix:</h4>
          <p className="sm">
            Implement pressure support techniques such as water injection or gas
            re-injection to increase reservoir pressure, optimize the gas flow
            rate to maintain stable wellhead pressure, and continuously monitor
            pressures to prevent future issues.
          </p>
        </div>
        <div className="assistantSide__action">
          <h4>Action Taken</h4>
          <div className="assistantSide__action-text">
            <p className="sm">
              Lorem ipsum dolor sit amet elementum odio fames aliq senectus is
              the Lorem ipsum dolor sit amet elementum odio fames aliq senectus.
              elementum odio fames aliquam senectus malesuada aenean
            </p>
          </div>
        </div>
      </div>
      <form className="assistantSide__foot">
        <div className="input">
          <input type="text" placeholder="How can I help you?" />
          <button type="submit">{sendIcon}</button>
        </div>
      </form>
    </div>
  );
}
