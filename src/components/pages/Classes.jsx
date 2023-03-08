import React from 'react'
import StudentGrading from "../StudentGrading";
import Assignment from "../Assignment";
function Classes() {
  return (
    <div className="pt-20  h-screen overflow-auto">
        <Assignment />
        <StudentGrading />
      </div>
  )
}

export default Classes