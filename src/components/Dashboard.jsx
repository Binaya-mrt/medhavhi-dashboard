import React from "react";
// import Info from "./navComponents/Info";
// import Navbar from "./Navbar";
import { ReactComponent as Download } from "../assets/svgs/download.svg";

function Dashboard({ closePopup, student }) {
  // console.log(student)
  return (
    <div className=" font-abc text-sm text-bgColor-jetPrimary mx-2 my-2 ">
      {/* Heading div with close button */}
      <div className="flex justify-between  items-start py-3 px-2">
        <h2 className="text-md">Student Submission</h2>
        <button onClick={closePopup} className="text-xl">
          X
        </button>
      </div>
      <hr></hr>
      {/* Content div */}

      <div className="mx-2">
        {/* Image and student info*/}
        <div className="flex justify-between my-5  ">
          <div className="flex ">
            <img
              className="w-20 h-20 rounded-3xl"
              src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></img>
            <div className="px-4">
              <h2>{student?.name}</h2>
              <p className="text-spanishGray text-[12px]">
                {student?.submittedDate}
              </p>
              <p
                className={
                  student?.remakrs === "on-time"
                    ? "text-mediumgreen text-sm"
                    : "text-rosepink text-sm"
                }
              >
                {student.remakrs}
              </p>
            </div>
          </div>
        </div>
        {/* submittedFiles */}
        <div>
          <p className="text-spanishGray">Submitted files</p>
          <div className="flex gap-2 flex-row">
            {student?.submittedFiles.map((file) => {
              return (
                <div className="shadow-sm mt-2 w-fit flex gap-5 items-center px-5  rounded-md ">
                  <img src="./img/ppt-icon.png" />
                  <div className="">
                    <p className="text-[12px]">{file?.title}</p>
                    <p className="text-[#9A9A9A] text-[12px]">{file?.size}</p>
                  </div>
                  <Download />
                </div>
              );
            })}
          </div>
        </div>
        {/* comment section */}
        <div className="my-3">
          <p className="text-spanishGray pb-3">Student Comment</p>
          <p className="text-jetPrimary">{student?.comment}</p>
        </div>
        {/* Grade obtained */}

        <div>
          <p className="text-spanishGray ">Grade Obtained</p>
          <div className="flex items-center gap-4">
            <input
              className={`${
                student.graded ? "text-3xl" : "text-md"
              } px-9 text-center placeholder:text-md py-3 border-b border-b-black border-b-3 w-44 `}
              value={student?.grade}
              placeholder={`Enter grade here`}
            />
            <div className=" p-6 rounded-md bg-spanishGray/10 text-center text-xl">
              <p className="text-black text-sm">
                Out of <span>10</span>
              </p>
            </div>
          </div>
        </div>
        {/* suggestion or teacher comment section */}
        <div className="bg-spanishGray/10 px-2 py-2 my-3 rounded-md">
          <p className="text-jetPrimary">{student?.comment}</p>
        </div>
        {/* Button section */}
        <div className="flex items-center justify-end gap-4 mx-4 my-6">
          <button className="border-none text-red-600">
            {" "}
            Ask for resubmission
          </button>

          <button className=" text-white rounded-full px-5 py-2 bg-primaryblue">
            {student.graded ? "Edit Grade" : "Grade"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
