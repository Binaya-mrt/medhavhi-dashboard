import React from "react";
import AssignmentFrame from "./widgets/AssignmentFrame";
import UserCircleAvatar from "./widgets/UserCircleAvatar";
import users from "../data/Users";
import AssignmentDetail from "../data/Assignment";

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
        <div className="flex gap-1 items-center justify-around border border-mediumgreen  rounded-xl pr-2">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="19" height="19" rx="9" fill="#37B76C" />
            <path
              d="M12.2232 5H6.67685C6.46872 5 6.3 5.16872 6.3 5.37685C6.3 6.57621 6.77645 7.72644 7.62452 8.57452L8.17315 9.12315C8.22764 9.17763 8.25488 9.20487 8.27438 9.23103C8.39335 9.39061 8.39335 9.60939 8.27438 9.76897C8.25488 9.79513 8.22764 9.82237 8.17315 9.87685L7.62452 10.4255C6.77645 11.2736 6.3 12.4238 6.3 13.6232C6.3 13.8313 6.46872 14 6.67685 14H12.2232C12.4313 14 12.6 13.8313 12.6 13.6232C12.6 12.4238 12.1236 11.2736 11.2755 10.4255L10.7269 9.87685C10.6724 9.82237 10.6451 9.79513 10.6256 9.76897C10.5067 9.60939 10.5067 9.39061 10.6256 9.23103C10.6451 9.20487 10.6724 9.17763 10.7269 9.12315L11.2755 8.57452C12.1236 7.72644 12.6 6.57621 12.6 5.37685C12.6 5.16872 12.4313 5 12.2232 5Z"
              stroke="white"
              stroke-width="0.9"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-sm text-mediumgreen">{AssignmentDetail.dueDate}</p>
        </div>
      </div>
      <div>
        <p className="text-[#9A9A9A] px-5">{AssignmentDetail.detail}</p>
      </div>
      <div className="shadow-md m-3 w-fit flex gap-5 px-5 py-3 rounded-md ">
        <img src="./img/ppt-icon.png" />
        <div className="">
          <p className="text-sm">{AssignmentDetail.filetitle}</p>
          <p className="text-[#9A9A9A] text-sm">{AssignmentDetail.filesize}</p>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13H1M11 6.33333L7 10.3333M7 10.3333L3 6.33333M7 10.3333V1"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Assignment;
