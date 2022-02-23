import React from "react";

//third party
import { NavLink, Outlet,na } from "react-router-dom";
function App() {

  const CustomNavLink = (props: NavLinkProps) => <NavLink {...props} />

  return (
    <div className="App">
      <nav className="bg-slate-200 p-2">
        <NavLink
          className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
        exact
          // className={(isActive) => `${isActive ? "bg-slate-300" : "bg-black	"}`}
          to="admin"
          style={(isActive) => ({
            color: isActive ? "red" : "blue",
          })}
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
