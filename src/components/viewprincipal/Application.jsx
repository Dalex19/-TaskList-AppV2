import { useEffect, useState, useContext } from "react";
import { FiSearch, BsCalendar2DateFill } from "react-icons/all";
import { Activities } from "./Activities";
import ViewTaskPage from './ViewTaskPage'
import { Task } from "./Task";
import { userContext } from "../context/UserContext";

export const Application = () => {
  const [viewTask, setViewTask] = useState(false);
  
  return (
    <div className="w-[75%] h-full flex flex-col">
      <Header />
      <Activities setViewTask={setViewTask} />
      {viewTask && <Task setViewTask={setViewTask}/>}
      <ViewTaskPage />
    </div>
  );
};

const Header = () => {
  const [date, setDate] = useState("");
  const { user } = useContext(userContext);

  useEffect(() => {
    const now = Date.now();
    const dateNow = new Date(now);
    setDate(dateNow.toLocaleDateString());
  }, []);

  return (
    <div className="flex items-center text-gray-500 border-gray-300  border-b-4 md:gap-1 justify-around w-full md:w-full h-[10%] text-sm mx-auto gap-6">
      <span className="bg-gray-300  md:w-[45%] rounded-lg flex items-center justify-center lg:flex-row gap-2 px-2 py-1 lg:w-3/12">
        {" "}
        <BsCalendar2DateFill /> {date}
      </span>
      <div className="relative rounded-lg py-1 md:w-[45%] lg:flex-2 flex items-center bg-gray-300 ">
        <span className="w-6 absolute left-2 cursor-pointer">
          <FiSearch />
        </span>
        <input
          type="text"
          className="bg-transparent outline-none pl-8 placeholder-gray-500"
          placeholder="What are you looking for..."
        />
      </div>
      <div className="flex flex-col lg:w-3/12  md:w-[45%] md:py-0 md:px-0  px-2 py-2">
        <p className="">Hi {(user.name) ? user.name : user.email}</p>
        <p className="text-xs">{(!user.email) ? user.email : ''}</p>
      </div>
    </div>
  );
};
