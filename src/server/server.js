const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);
const userSocketmap = {};
function getAllConnectedClients(roomId) {
  // Map
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        userName: userSocketMap[socketId],
      };
    }
  );
}
io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
  socket.on(ACTIONS.JOIN, ({ roomId, userName }) => {
    //We are storing unique IDs with userNames in browser itself
    userSocketmap[socket.id] = userName;
    socket.join(roomId);
    const client = getAllConnectedClients(roomId);
  });
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
