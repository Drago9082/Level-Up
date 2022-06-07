import React from "react";
import Stage from "../components/Stage";
import Chatroom from "../components/Chatroom";
// import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../components/Login";


const Home = () => {
  return (
    <>
      <Stage />
      <Chatroom />
      <Login />

    </>
  );
};

export default Home;
