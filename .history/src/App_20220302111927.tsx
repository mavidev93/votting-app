//React
import React from "react";

//app
import { useSession, SessionProvider } from "./Context/SessionContext";
import RequestAccount from "./Components/RequestAccount/RequestAccount";
//third party
import { NavLink, Outlet } from "react-router-dom";
function App() {
  let navLinkClassNames = "p-2  rounded inline-block ";
  let activeNavLinkClassNames = "shadow-md bg-slate-50";
  return (
    <SessionProvider>
      <div className="App font-regular  tracking-wide relative	">
        <nav className="bg-slate-100 p-2">
          <NavLink
            // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
            className={({ isActive }) =>
              navLinkClassNames + (isActive ? activeNavLinkClassNames : "")
            }
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            end
            // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
            className={({ isActive }) =>
              navLinkClassNames + (isActive ? activeNavLinkClassNames : "")
            }
            to="admin"
          >
            {" "}
            Admin
          </NavLink>
        </nav>

        <Outlet />
        <div className=" rotate-90  absolute top-0 left-0 bg-cyan-500">
          register voter
        </div>
      </div>
    </SessionProvider>
    // <div className="App font-regular  tracking-wide	">
    //   <RequestAccount />
    // </div>
  );
}

export default App;
