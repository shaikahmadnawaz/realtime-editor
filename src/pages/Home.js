// rafce - react arrow function component export
import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (e) => {
    // preventDefault is used to prevent refreshing
    //the page by clicking < a > tab
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
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
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USER NAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <button className="btn joinBtn">Join</button>
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
