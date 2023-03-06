import React, { useState } from "react";
import students from "../data/Students";
// import Dialog from "./Dialog";
import Graded from "./Graded";
import NonGraded from "./NonGraded";
function StudentGrading({fun}) {
  let [graded, setGraded] = useState(false);
  
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33334 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33334 1.33333C4.01963 1.33333 1.33334 4.01962 1.33334 7.33333C1.33334 10.647 4.01963 13.3333 7.33334 13.3333Z"
                stroke="#565659"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.62 13.7932C12.9733 14.8599 13.78 14.9665 14.4 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.38 13.0665 12.62 13.7932Z"
                stroke="#565659"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <input placeholder="Search" className="bg-transparent py-1 " />
        </div>
      </div>
      {graded && <Graded />}

      {/* Non graded */}
      {!graded && <NonGraded fun={fun} />}
      
    </div>
  );
}

export default StudentGrading;
