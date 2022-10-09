import { useEffect, useState, useContext } from "react";
import { FiSearch, BsCalendar2DateFill } from "react-icons/all";
import { Activities } from "./Activities";
import ViewTaskPage from './ViewTaskPage'
import { Task } from "./Task";
import { userContext } from "../context/UserContext";

export const Application = () => {
  const [viewTask, setViewTask] = useState(false);
  
  return (
    <div className="w-[95%] md:w-[75%] h-full flex flex-col">
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
    <div className="grid grid-cols-2 md:flex  md:flex-row items-center justify-around text-gray-500 border-gray-300  border-b-4 md:gap-1 w-full md:w-full h-[20%] md:h-[12%] text-sm mx-auto gap-2 py-2">
      <span className="bg-gray-300 border col-span-1 w-5/6 justify-self-end md:w-[45%] rounded-lg flex items-center justify-center  gap-2 px-2 py-1 lg:w-[18%] lg:ml-2">
        {" "}
        <BsCalendar2DateFill /> {date}
      </span>
      <div className="relative col-span-2 mx-auto rounded-lg py-1 w-11/12 md:w-[45%] lg:flex-2 flex items-center bg-gray-300 ">
        <span className="w-6 absolute left-2 cursor-pointer">
          <FiSearch />
        </span>
        <input
          type="text"
          className="bg-transparent outline-none pl-8 placeholder-gray-500"
          placeholder="What are you looking for..."
        />
      </div>
      <div className="col-span-1 ml-2 md:ml-0  w-full row-start-1 flex flex-col lg:w-3/12  md:w-[45%] items-center">
        <p className="text-[16px] text-center lg:text-[20px]">Hi {(user.name) ? user.name : user.email}</p>
        <p className="text-lg md:text-xl">{(!user.email) ? user.email : ''}</p>
      </div>
    </div>
  );
};
