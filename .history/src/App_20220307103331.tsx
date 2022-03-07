//React
import React from "react";

//app
import {  SessionProvider } from "./Context/SessionContext";
import Navbar from "./Components/Navbar/Navbar";


//third party
import { NavLink, Outlet } from "react-router-dom";

function App() {

  return (
    <SessionProvider>
      <div className="App font-regular  tracking-wide relative 	">
        <

        <Outlet />
      </div>
    </SessionProvider>
    // <div className="App font-regular  tracking-wide	">
    //   <RequestAccount />
    // </div>
  );
}

export default App;
