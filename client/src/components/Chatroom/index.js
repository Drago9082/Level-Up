import React, { useContext, useState } from "react";
import { io } from "socket.io-client";
import Chat from "./Chat";
import globalContext from "../../context/globalContext";
import "./style.css";
const socket = io.connect("localhost:3000");

function Chatroom() {
  const { user } = useContext(globalContext)
  const room = "levelup";
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinChat = () => {
    if (username !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
    if(username === ""){
      setUsername(user.userName)
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <>
      <div className="Chat">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Enter Your Name:</h3>
            <input
              defaultValue={username}
              type="text"
              placeholder="Big Poppa...."
              onChange={handleUserNameChange}
            />
            <button onClick={joinChat}>Join Chat</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} />
        )}
      </div>
    </>
  );
}

export default Chatroom;
