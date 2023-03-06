import React from "react";
import students from "../data/Students";

function Graded() {
  let newstudents = [];

  newstudents = students.filter((person) => person.graded === true);
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
        <div className=" w-32 text-center bg-mediumgreen rounded-md text-white py-3 ">
          <p className="text-sm">Graded</p>
          <p>{student.grade}/10</p>
        </div>
      </div>
    );
  });
}

export default Graded;
