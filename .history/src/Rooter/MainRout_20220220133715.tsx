//react 
import { lazy,Suspense } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom'

//app
import App from '../'

//Routing 

const Admin = lazy(()=>import("../pages/Admin/Admin"))

//Routes
let routes = [{url:"/",component:App}]

