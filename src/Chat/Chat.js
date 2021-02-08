import React, { useEffect, useState } from "react";
import "./Chat.css";
import db from "../firebase";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Message from "./Message/Message";
import ChatInput from "./Chatinput/ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });
      db.collection("rooms")
        .doc(roomId)
        .collection("massages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setRoomMessages(
            snapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        });
    }
  }, [roomId]);
  console.log(roomDetails);
  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <span>
            <InfoOutlinedIcon />
            Details
          </span>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({ massage, timestamp, user, userimage }) => {
          return (
            <Message
              massage={massage}
              timestamp={timestamp}
              user={user}
              userimage={userimage}
            />
          );
        })}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}
export default Chat;
