import React, { useState } from "react";
import students from "../data/Students";
import Popup from "./Popup";

function Graded({ students, graded }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStudent,setSelectedStudent]=useState({});

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handlePopupClick = (event) => {
    if (event.target === event.currentTarget) {
      // Clicked on the popup background
      handleClosePopup();
    }
  };
  const handleSelectedStudent=(student)=>{
    setSelectedStudent(student);
    handleOpenPopup();
  }

  console.table(selectedStudent)
  // newstudents = students.filter((person) => person.graded === true);
  return (
    <div>
      {students.map((student, index) => {
        return (
          <div
            className="flex items-center justify-between px-10 py-5"
            key={index}
          >
            <div className="flex items-center gap-3">
              <img src={student.img} className="h-20 w-14 rounded-md" />
              <div>
                <h2 className="">{student.name}</h2>
                <p className="text-spanishGray text-sm">
                  {student?.submittedDate}
                </p>
                <p
                  className={
                    student.remakrs === "on-time"
                      ? "text-mediumgreen text-sm"
                      : "text-rosepink text-sm"
                  }
                >
                  {student?.remakrs}
                </p>
              </div>
            </div>
            {graded ? (
              <button
             onClick={()=>handleSelectedStudent(student)}
                className=" w-32 text-center bg-mediumgreen rounded-md text-white py-3 "
              >
                <p className="text-sm">Graded</p>
                <p>{student?.grade}/10</p>
              </button>
            ) : (
              <div className="text-center w-32 bg-primaryblue rounded-md text-white py-3">
                <button className="text-sm" onClick={()=>handleSelectedStudent(student)}>
                  Grade
                </button>
              </div>
            )}

           
          </div>

        );
      })}
       {isOpen && (
              <Popup
                onClose={handleClosePopup}
                student={selectedStudent}
                onClick={handlePopupClick}
                // key={index}
              ></Popup>
            )}
    </div>
  );
}

export default Graded;



//<button onClick={handleOpenPopup} className=" w-32 text-center bg-mediumgreen rounded-md text-white py-3 ">

//   <p className="text-sm">Graded</p>
//   <p>{student?.grade}/10</p>
// </button>
