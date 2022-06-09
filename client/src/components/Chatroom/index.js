import React, { useEffect, useState, useContext } from "react";
import globalContext from "../../context/globalContext";
import { io } from "socket.io-client";
import Chat from "./Chat";
import "./style.css";
const socket = io.connect(
  process.env.REACT_APP_BASE_URL || "http://localhost:3000"
);

function Chatroom() {
  const room = "levelup";
  const { user, loggedIn } = useContext(globalContext);
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinChat = () => {};

  console.log(user);

  useEffect(() => {
    setUsername(user.userName);
    console.log(user.userName);
    if (username !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }

    if (username === "") {
      setUsername(user.userName);
      socket.emit("join_room", room);
      setShowChat(true);
    }
  });
  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <div className="Chat">
        {!showChat ? <></> : <Chat socket={socket} username={username} />}
      </div>
    </>
  );
}

export default Chatroom;
