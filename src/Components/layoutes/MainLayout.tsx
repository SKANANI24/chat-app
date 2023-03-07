import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  useEffect(()=>{
    console.log("main layout");
  },[])
  return (
      <div id="page-body" >
        <Outlet/>
      </div>
  );
}
