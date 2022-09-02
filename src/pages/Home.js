// rafce - react arrow function component export
import React from "react";

const Home = () => {
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
          <input type="text" className="inputBox" placeholder="ROOM ID" />
          <input type="text" className="inputBox" placeholder="USER NAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            {/* non-breaking space: &nbsp; A non-breaking space is a space 
                that will not break into a new line. */}
            If you don't have an invite then create&nbsp;
            <a href="newRoom" className="createNewBtn">
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
