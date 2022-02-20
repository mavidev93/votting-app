import React from "react";

//third party
import { NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <NavLink to="admin"> Admin</NavLink>
      <Outlet />
    </div>
  );
}

export default App;
