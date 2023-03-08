import React from "react";

import Classes from "./pages/Classes";
import Topnav from "./Topnav";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Assignment from "./Assignment";
import Attendance from "./pages/Attendance";


function Topbar() {
  return (
    <div className=" grow   ">
      <Topnav />
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/class" element={<Classes/>}/>
  <Route path="/attendance" element={<Attendance/>}/>
  <Route path="/test" element={<Test/>}/>

</Routes>
     
    </div>
  );
}

export default Topbar;
