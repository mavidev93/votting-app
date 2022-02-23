import React from "react";

//third party
import { NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="admin"> Admin</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
