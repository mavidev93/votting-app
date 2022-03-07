//React
import React from "react";

//app
import { SessionProvider } from "./Context/SessionContext";
import Navbar from "./Components/Navbar/Navbar";

//third party
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <SessionProvider>
      <div className="App font-regular  tracking-wide relative 	">
        <Navbar />

        <Outlet />
      </div>
    </SessionProvider>

  );
}

export default App;
