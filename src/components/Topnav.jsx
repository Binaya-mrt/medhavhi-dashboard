import React from 'react'

import { ReactComponent as Backarrow } from '../assets/svgs/backarrow.svg'
import { ReactComponent as Notification } from '../assets/svgs/notification.svg'
function Topnav() {
  return (
   <div className="bg-white py-5
   fixed left-[250px] right-0 px-10 ">
       <div className='flex justify-between items-center'> 
        <div className="flex gap-4 text-sm md:text-base">
         <Backarrow/>
          <p>
            Assignment<span className="text-primaryblue">/ </span>Life cycle of
            frog
          </p>
        </div>
        <div className="flex  items-center gap-5 ">
         <Notification/>
          <img
            src="https://th.bing.com/th/id/OIP.ZmIIA0WkR7-G-Y9tpE1ZKgHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7"
            className="h-10 w-10 rounded-[50%]"
          />
        </div>
       </div>
              </div>
      
  )
}

export default Topnav