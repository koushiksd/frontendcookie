import axios from "axios";


import React from "react";

function Home() {
  setTimeout(() => {
    window.location.href=process.env.REACT_APP_backendport + "/api/open"
  }, 1000);
  console.log(process.env.REACT_APP_backendport, "REACT_APP_backendport");
  return (
    <div className="Home">
      <div className="Home">
        <div className="filter"></div>
        <p>demo 1</p>
      </div>
    </div>
  );
}

export default Home;
