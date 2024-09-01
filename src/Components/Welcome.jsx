import React from "react";
import { branchIcon, editBig, newsletterIcon, questionIcon } from "Base/SVG";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="welcome"
    >
      <div className="welcome__logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="welcome__title">
        <h2>Welcome To Maxwell</h2>
        <p className="big">
          A Maxwell Chatbot is a personalized learning professor. It's provide
          simple, short, and practical explanations on various topics that you
          want to learn about.
        </p>
      </div>
      <ul className="welcome__list">
        <li>
          {questionIcon}
          <p>Natural language Conversations</p>
        </li>
        <li>
          {branchIcon}
          <p>Knowledge Base</p>
        </li>
        <li>
          {editBig}
          <p>Personalized Recommendations</p>
        </li>
        <li>
          {newsletterIcon}
          <p>Seamless Integrations</p>
        </li>
      </ul>
    </motion.div>
  );
}
