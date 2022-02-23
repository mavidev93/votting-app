import React from "react";

//third party
import { NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="admin"> Admin</NavLink>
      <Outlet />
    </div>
  );
}

export default App;
