// rafce - react arrow function component export
import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (e) => {
    // preventDefault is used to prevent refreshing
    //the page by clicking < a > tab
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };
  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("ROOM ID & Username is required");
      return;
    }
    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            // we can change Id manually by doing like this
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            // By pressing enter key we can login
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USER NAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            {/* non-breaking space: &nbsp; A non-breaking space is a space 
                that will not break into a new line. */}
            If you don't have an invite then create&nbsp;
            <a onClick={createNewRoom} href="newRoom" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Buid with 💛 by{" "}
          <a href="https://github.com/sanawaz1080">Ahmad Nawaz</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
