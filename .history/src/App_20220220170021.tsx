import React from "react";

//third party
import { NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav className="bg-slate-200 p-2">
        <NavLink className={isActive?} to="/">Home</NavLink>
        <NavLink to="admin"> Admin</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
