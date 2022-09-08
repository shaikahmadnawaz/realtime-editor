import { io } from "socket.io-client";

export const initSocket = async () => {
  // these options are taken from documentation
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  // we have to give url of port we are present at
  // Where as in express we have install seperate .env pkg
  return io(process.env.REACT_APP_BACKEND_URL, options);
};
