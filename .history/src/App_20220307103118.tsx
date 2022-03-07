//React
import React from "react";

//app
import { useSession, SessionProvider } from "./Context/SessionContext";


//third party
import { NavLink, Outlet } from "react-router-dom";

function App() {
  let navLinkClassNames = "p-2  rounded inline-block ";
  let activeNavLinkClassNames = "shadow-md bg-slate-50";
  return (
    <SessionProvider>
      <div className="App font-regular  tracking-wide relative 	">


        <Outlet />
      </div>
    </SessionProvider>
    // <div className="App font-regular  tracking-wide	">
    //   <RequestAccount />
    // </div>
  );
}

export default App;
