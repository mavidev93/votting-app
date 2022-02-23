import React from "react";

//third party
import { NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav className="bg-slate-200 p-2">
        <NavLink
          className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
          to="/"
          end
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Home
        </NavLink>
        <NavLink
          end
          // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
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
