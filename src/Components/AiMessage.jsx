import React from "react";
import { CopyIcon, dotsIcon, reloadIcon, shareIcon } from "Base/SVG";
import { motion } from "framer-motion";

export default function AiMessage(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="message ai"
    >
      <div className="message__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="messageContent">
        <div className="messageContent__top">
          <div className="messageContent__info">
            <div className="messageContent__info">Maxwell</div>
            <hr />
            <div className="messageContent__time">{props.answer.date}</div>
          </div>
          <div className="messageContent__tools">
            <button type="button">{reloadIcon}</button>
            <button type="button">{CopyIcon}</button>
            <button type="button">{shareIcon}</button>
            <button type="button">{dotsIcon}</button>
          </div>
        </div>
        <div className="messageContent__text">
          <p>{props.answer.text}</p>
        </div>
      </div>
    </motion.div>
  );
}
