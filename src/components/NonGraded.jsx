import React, { useState } from "react";
import students from "../data/Students";

function NonGraded(props) {
  let newstudents = [];

  newstudents = students.filter((person) => person.graded === false);
  return newstudents.map((student, index) => {
    return (
      <div className="flex items-center justify-between px-10 py-5" key={index}>
        <div className="flex items-center gap-3">
          <img src={student.img} className="h-20 w-14 rounded-md" />
          <div>
            <h2 className="font-semibold">{student.name}</h2>
            <p className="text-spanishGray text-sm">{student.submittedDate}</p>
            <p
              className={
                student.remakrs === "on-time"
                  ? "text-mediumgreen text-sm"
                  : "text-rosepink text-sm"
              }
            >
              {student.remakrs}
            </p>
          </div>
        </div>
        <div className="text-center w-32 bg-primaryblue rounded-md text-white py-3">
          <button className="text-sm" onClick={props.fun}>
            Grade
          </button>
        </div>
      </div>
    );
  });
}

export default NonGraded;
