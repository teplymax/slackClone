import React, { useState } from "react";
import "./ChatInput.css";
import { Button } from "@material-ui/core";
import db from "../../firebase";
import { useStateValue } from "../../Stateprovider";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      console.log(channelId);
      db.collection("rooms").doc(channelId).collection("massages").add({
        massage: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"Message...#" + channelName?.toLowerCase()}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}
export default ChatInput;
