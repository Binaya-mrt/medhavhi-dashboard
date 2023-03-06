import React from 'react'
import Assignment from './Assignment'
import StudentGrading from './StudentGrading'
import Topnav from './Topnav'

function Topbar() {
  return (
    <div className=' grow   '>
        <Topnav/>
        <div className='pt-20  h-screen overflow-auto'>

          <Assignment/>
            <StudentGrading/>
        </div>
          
       
    </div>

  )
}

export default Topbar