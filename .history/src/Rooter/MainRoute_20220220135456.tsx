//react
import React, { lazy, Suspense } from "react";
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
        < fallback={<div>loading ...</div>}>
          <Route path="admin" element={
            <Suspense>
          <Admin />
          </Suspense>
        }
          
          />
        
      </Route>
    </Routes>
  );
}

export default MainRoute;
