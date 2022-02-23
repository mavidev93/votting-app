import React from "react";

//third party
import { NavLink, Outlet } from "react-router-dom";
function App() {
  let navLinkClassNames = "p3  rounded-md ";
  return (
    <div className="App">
      <nav className="bg-slate-200 p-2">
        <NavLink
          // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
          className={({ isActive }) => navLinkClassNames + (isActive ? " bg-slate-50" : "")}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          end
          // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
          className={({ isActive }) => "p2" + (isActive ? " bg-slate-50" : "")}
          to="admin"
        >
          {" "}
          Admin
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
