import React, { useState } from "react";
import students from "../data/Students";
import {ReactComponent as Search} from '../assets/svgs/search.svg'

// import Dialog from "./Dialog";
import Graded from "./Graded";
import NonGraded from "./NonGraded";
function StudentGrading() {
  let [graded, setGraded] = useState(true);
  
  const toggleGraded = () => {
    setGraded(!graded);
  };
 
    let newstudents = [];
  if (graded) {
    newstudents = students.filter((person) => person.graded === true);
  } else {
    newstudents = students.filter((person) => person.graded === false);
  }

  return (
    <div className="m-6 bg-white rounded-md py-3 h-1/2 overflow-y-scroll ">
      {/* Button of graded and non graded and a search bar */}
      <div className="px-5 py-5 flex justify-between items-center">
        <div className="">
          <ul className="flex items-center">
            <li
              className={
                !graded
                  ? "w-32 text-center py-3 bg-primaryblue text-white rounded-md"
                  : "px-8 py-3"
              }
            >
              <button onClick={toggleGraded} className="text-md md:text-base">
                Not-Graded
              </button>
            </li>
            <li
              className={
                graded
                  ? "w-32 text-center py-3 bg-primaryblue text-white rounded-md"
                  : "px-8 py-3"
              }
            >
              <button onClick={toggleGraded}>Graded</button>
            </li>
          </ul>
        </div>
        <div className="flex bg-bgGrey  items-center gap-4 rounded-full py-1 ">
          <div className="pl-3">
           <Search/>
          </div>

          <input placeholder="Search" className="bg-transparent py-1 " />
        </div>
      </div>
     
       <Graded students={newstudents} graded={graded}/>

      
      
    </div>
  );
}

export default StudentGrading;
