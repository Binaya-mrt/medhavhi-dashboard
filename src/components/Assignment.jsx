import React from "react";
import AssignmentFrame from "./widgets/AssignmentFrame";
import UserCircleAvatar from "./widgets/UserCircleAvatar";
import users from "../data/Users";
import AssignmentDetail from "../data/Assignment";

import {ReactComponent as DueDate} from '../assets/svgs/sandclock.svg'
import {ReactComponent as Download} from '../assets/svgs/download.svg'
function Assignment() {
  return (
    <div className="m-6 bg-white rounded-md py-3">
      <div className="px-5 py-5  flex justify-between items-center">
        <div className="flex gap-5">
          <AssignmentFrame title={AssignmentDetail.heading} />
          <div className="flex flex-col ">
            <h3 className="font-semibold text-base text-jetPrimary ">
              {AssignmentDetail.title}
            </h3>
            <div className="text-sm text-jetPrimary flex">
              <p>Submitted by:</p>
              <UserCircleAvatar users={users} />
              <p>
                Assigned on:
                <span className="text-[#9A9A9A] text-sm mx-2 ">
                  {AssignmentDetail.assignedDate}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center justify-between border border-mediumgreen  rounded-xl pr-2">
         <DueDate/>
          <p className="text-sm text-mediumgreen">{AssignmentDetail.dueDate}</p>
        </div>
      </div>
      <div>
        <p className="text-[#9A9A9A] px-5">{AssignmentDetail.detail}</p>
      </div>
      <div className="shadow-md m-3 w-fit flex gap-5 items-center px-5 py-3 rounded-md ">
        <img src="./img/ppt-icon.png" />
        <div className="">
          <p className="text-sm">{AssignmentDetail.filetitle}</p>
          <p className="text-[#9A9A9A] text-sm">{AssignmentDetail.filesize}</p>
        </div>
        <Download/>
      </div>
    </div>
  );
}

export default Assignment;
