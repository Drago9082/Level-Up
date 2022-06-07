import { nonExecutableDefinitionMessage } from "graphql/validation/rules/ExecutableDefinitions";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import uuid from "react-uuid";
function Chat({ socket, username }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [chatHidden, setChatHidden] = useState(true);
  let hideunhideStyle = {};
  let chatwindowStyle = {};
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: "levelup",
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleChat = () => {
    setChatHidden(!chatHidden);
    console.log(chatHidden);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <>
      <div className="chat-window" style={{ height: chatHidden ? 45 : 420 }}>
        <div className="chat-header">
          <p>
            <button onClick={handleChat}>Chat Room</button>
          </p>
        </div>
        <div
          id="hideunhide"
          style={{ display: chatHidden ? "none" : "inline" }}
        >
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((content) => {
                return (
                  <div
                    key={uuid()}
                    className="message"
                    id={username === content.author ? "you" : "other"}
                  >
                    <div>
                      <div className="message-content">
                        <p id="time">
                          {content.time}
                          {"\u00A0"}
                        </p>
                        <p id="author">
                          {content.author}:{"\u00A0"}
                        </p>
                        <p id="message"> {content.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              onChange={handleMessageChange}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
