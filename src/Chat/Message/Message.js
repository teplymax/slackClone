import React from "react";
import "./Message.css";

function Message({ massage, timestamp, user, userimage }) {
  return (
    <div className="message">
      <img src={userimage} alt="userimg" />
      <div className="message__info">
        <h4>
          {user}{" "}
          <time className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </time>
        </h4>
        <p>{massage}</p>
      </div>
    </div>
  );
}
export default Message;
