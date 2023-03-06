import * as React from "react";

function UserCircleAvatar({ users }) {
  let maxUsers = [];
  if (users.length > 4) {
    maxUsers = users.slice(0, 3);
  }

  return (
    <div className="flex items-center mx-1">
      {maxUsers.map((user, index) => {
        return (
          <div
            key={index}
            className="rounded-[50%] bg-[#2BB8D633] -mr-2  h-4 w-4 overflow-hidden   text-[#2BB8D6]"
          >
            <img src={user} />
          </div>
        );
      })}
      <div className="rounded-[100%] bg-[#2BB8D633] z-1 h-4 w-4  mx-1  text-[#2BB8D6]">
        <p className="text-xs text-center ">+{users.length - 3}</p>
      </div>
    </div>
  );
}

export default UserCircleAvatar;
