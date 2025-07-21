import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";

const Body = () => {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Login/>
  },{
    path:"/browse",
    element:<Browse/>
  }])
 
 

 
  
  return <div><RouterProvider  router={appRouter}/></div>;
};

export default Body;
