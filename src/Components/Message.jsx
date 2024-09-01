import React from "react";
import { dotsIcon, editIcon, notebookIcon } from "Base/SVG";
import { motion } from "framer-motion";

export default function Message(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="message"
    >
      <div className="messageContent">
        <div className="messageContent__top">
          <div className="messageContent__tools">
            <button type="button">{dotsIcon}</button>
            <button type="button">{notebookIcon}</button>
            <button type="button">{editIcon}</button>
          </div>
          <div className="messageContent__info">
            <div className="messageContent__time">{props.question.date}</div>
            <hr />
            <div className="messageContent__name">Jack Joe</div>
          </div>
        </div>
        <div className="messageContent__text">{props.question.text}</div>
      </div>
      <div className="message__avatar">
        <img src="/images/avatar.png" alt="" />
      </div>
    </motion.div>
  );
}
