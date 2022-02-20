//react
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//app
import App from "../App";

//Routing

const Admin = lazy(() => import("../pages/Admin/Admin"));

//Routes
// let routes = [{url:"/",component:App},{url:'admin',component:Admin}]

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
