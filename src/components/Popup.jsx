import React from "react";
import Dashboard from "./Dashboard";

const Popup = ({ onClose, name, onClick, student }) => {
  console.log(student);
  return (
    <div
      className="fixed top-0 left-0 z-30 w-full h-full bg-[#00000080]"
      onClick={onClick}
    >
      <div
        className="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2      
 bg-white rounded-t-2xl"
      >
        <Dashboard closePopup={onClose} student={student} />
      </div>
    </div>
  );
};

export default Popup;
