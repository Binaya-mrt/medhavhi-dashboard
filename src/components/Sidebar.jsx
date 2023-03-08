import React from "react";
import NavComponent from "./NavComponent";
import Logotitle from "./widgets/Logotitle";

function sidebar() {
  return (
    <div className=" min-w-[250px] bg-white pt-5 z-10 text-jetPrimary  overflow-auto h-screen">
      <Logotitle />
      <NavComponent />
    </div>
  );
}

export default sidebar;
//bg-white pt-5 z-10 text-jetPrimary basis-auto grow-0 shrink-0 overflow-auto h-screen
//
