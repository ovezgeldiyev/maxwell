import React, { useState } from "react";
import {
  attachIcon,
  gridIcon,
  microphoneIcon,
  photoIcon,
  plusIcon,
  sendIcon,
} from "Base/SVG";
import AiMessage from "Components/AiMessage";
import Message from "Components/Message";
import { chatModul } from "Components/messageModul";
import Welcome from "Components/Welcome";
import { motion } from "framer-motion";

export default function Chat() {
  const [message, setMessage] = useState({
    value: "",
  });
  const [sent, setSent] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [loading, setLoading] = useState(false);
  const updateMessage = (data) => {
    setMessage((message) => ({ ...message, ...data }));
  };
  return (
    <div className="chat">
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
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="writing"
          >
            <img src="/images/logo.png" alt="" />
            <div class="loader"></div>
          </motion.div>
        )}
        {chatModul.map((item, index) => {
          return (
            <div className="chat__group" key={index}>
              {sent && <Message {...item} />}
              {generate && <AiMessage {...item} />}
            </div>
          );
        })}
        {!sent && <Welcome />}
      </div>
      <div className="chatPrompt">
        <div className="chatPrompt__inner">
          <input
            type="text"
            placeholder="Chat Here..."
            onChange={(e) => updateMessage({ value: e.target.value })}
            value={message.value}
          />
          <div className="chatPrompt__buttons">
            <div className="chatPrompt__tools">
              <button type="button">{attachIcon}</button>
              <button type="button">{microphoneIcon}</button>
              <button type="button">{photoIcon}</button>
              <button type="button">{gridIcon}</button>
            </div>
            <hr />
            <button
              type="submit"
              className="button primary"
              disabled={message.value === ""}
              onClick={() => {
                setLoading(true);
                setSent(true);
                setMessage({
                  value: "",
                });
                setTimeout(() => {
                  setLoading(false);
                  setGenerate(true);
                }, 2000);
              }}
            >
              {sendIcon}
              <span>Generate Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
