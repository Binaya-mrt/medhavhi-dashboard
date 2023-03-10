import React,{useState} from "react";
import Counterdiv from "./widgets/Counterdiv";
import { ReactComponent as Dashboard } from "../assets/svgs/dashboard.svg";
import { ReactComponent as Classes } from "../assets/svgs/classes.svg";
import { ReactComponent as Attendance } from "../assets/svgs/attendance.svg";
import { ReactComponent as Discipline } from "../assets/svgs/disclipine.svg";
import { ReactComponent as Doubts } from "../assets/svgs/doubts.svg";
import { ReactComponent as Messages } from "../assets/svgs/message.svg";
import { ReactComponent as Schedule } from "../assets/svgs/schedule.svg";
import { ReactComponent as Notify } from "../assets/svgs/notify.svg";
import { ReactComponent as Setting } from "../assets/svgs/setting.svg";
import { ReactComponent as Logout } from "../assets/svgs/logout.svg";
import { ReactComponent as Test } from "../assets/svgs/test.svg";
import { ReactComponent as Report } from "../assets/svgs/reports.svg";

import { Link } from "react-router-dom";

function NavComponent() {
  const[active,setActive]=useState('dashboard');
  const activeTab=(active)=>{
    setActive(active);
  }
  return (
    // bg-primaryblue text-white rounded-md my-2
    <div className="mt-10 m-5 flex justify-between flex-col ">
      <ul className="">
        <li className={active==='dashboard'?'bg-primaryblue text-white rounded-md my-2':' my-2 mx-1'}>
          <Link to={'/'}> <button onClick={()=>activeTab('dashboard')}>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <Dashboard />
              <p>Dashboard</p>
            </div>
          </button></Link>
         
        </li>
        <li className={active==='class'?'bg-primaryblue text-white rounded-md my-2':'my-2'}>
          <Link to={'/class'}>
          <button onClick={()=>activeTab('class')}>
            <div className="flex justify-start items-center gap-3 py-2 px-2 ">
              <Classes />
              <p>Classes</p>
            </div>
          </button>
          </Link>
        </li>
        <li className={active==='attendance'?'bg-primaryblue text-white rounded-md my-2':'my-2 '} >
          <Link to={'/attendance'}>
          <button onClick={()=>activeTab('attendance')}>
            <div className="flex justify-between items-center gap-3  py-2 px-2">
              <Attendance />

              <p>Attendance</p>
            </div>
          </button>
          </Link>
        </li>
        <li className={active==='test'?'bg-primaryblue text-white rounded-md my-2':'my-2 '}>
          <Link to={'/test'}>          <button onClick={()=>activeTab('test')}>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <Test />

              <p>Test</p>
            </div>
          </button>
          </Link>

        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <Report />

              <p>Reports</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <Discipline />

              <p>Discipline</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <Doubts />
              <p>Doubts</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <Messages />

              <p>Messages</p>
              <Counterdiv count={3} />
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
          
            <div className="flex justify-between items-center gap-3 py-2 px-2">
              <Schedule />

              <p>Schedule</p>
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <Notify />

              <p>Notify</p>
            </div>
          </button>
        </li>
      </ul>
      <ul>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <Setting />

              <p>Setting</p>
              <Counterdiv count={3} />
            </div>
          </button>
        </li>
        <li className="my-2">
          <button>
            <div className="flex justify-between items-center gap-3 py-2 px-2 ">
              <Logout />

              <p>Logout</p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavComponent;
