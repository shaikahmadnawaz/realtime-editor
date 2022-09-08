import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import ACTIONS from "../Actions";
import Client from "../components/Client";
import Editor from "../components/Editor";
import { initSocket } from "../socket";
import {
  useLocation,
  //  It helps to go to the specific URL, forward or backward pages.
  useNavigate,
  Navigate,
  useParams,
} from "react-router-dom";
const EditorPage = () => {
  // initalisation of socket
  const socketRef = useRef(null);
  const location = useLocation();
  const reactNavigator = useNavigate();
  useEffect(() => {
    const init = async () => {
      /* The keyword await makes JavaScript wait until 
      that promise settles and returns its result. */
      /** Whenever you use ref use current */
      // By calling this client will connect to the server
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later.");
        reactNavigator("/");
      }
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        // this is new js syntax it will not throw error if uNmae not found
        // this is like a state that always returns your current URL.
        // If the URL is changed, the useLocation will be updated as well.
        userName: location.state?.userName,
      });
    };
    init();
  }, []);
  const [clients, setClients] = useState([
    { socketId: 1, userName: "Nawaz" },
    { socketId: 2, userName: "Awaz" },
    { socketId: 3, userName: "Hawaz" },
  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/code-sync.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} userName={client.userName} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
