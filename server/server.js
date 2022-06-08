const path = require("path");
const http = require("http");
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const socketio = require("socket.io");
const dotenv = require('dotenv');
const cookieParser=require("cookie-parser");
const cors = require('cors')

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:['http://localhost:3000'],
  credentials:true
}));
app.use(routes);

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`USER WITH ID: ${socket.id} JOINED ROOM: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
});

db.once("open", () => {
  server.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
