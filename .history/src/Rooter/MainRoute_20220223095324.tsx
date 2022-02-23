//react
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//app
import App from "../App";
im
//Routing

const Admin = lazy(() => import("../pages/Admin/Admin"));

//Routes
// let routes = [{url:"/",component:App},{url:'admin',component:Admin}]

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" end>
         
        </Route>
        <Route
          path="admin"
          element={
            <Suspense fallback={<div>loading ...</div>}>
              <Admin />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default MainRoute;
