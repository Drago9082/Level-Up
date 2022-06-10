import React, { useEffect, useState, useContext } from "react";
import globalContext from "../../context/globalContext";
import { io } from "socket.io-client";
import Chat from "./Chat";
import "./style.css";
const socket = io(process.env.REACT_APP_BASE_URL_IO || "http://localhost:3000");

function Chatroom() {
  const room = "levelup";
  const { user, loggedIn } = useContext(globalContext);
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);
  const joinChat = () => {};


  useEffect(() => {
    setUsername(user.userName);
    if (user.userName !== undefined) {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }, [user]);
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
