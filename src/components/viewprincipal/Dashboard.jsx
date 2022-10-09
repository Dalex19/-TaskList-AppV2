import React, { useContext, useState } from "react";
import logo from "../../assets/google-360suite.svg";
import {
  BsThreeDotsVertical,
  FaListUl,
  BsCalendar2CheckFill,
} from "react-icons/all";
import { Application } from "./Application";
import { Categories } from "./Categories";
import { taskContext } from "../context/TaskProvider";

const Dashboard = () => {
  return (
    <div className="flex font-poppins md:h-3/4 w-[95%] lg:w-3/4 h-[90%] rounded-md bg-white justify-evenly">
      <MenuLeft /> 
      <Application />
    </div>
  );
};

export default Dashboard;

const MenuLeft = () => {
  return (
    <div className="w-3/12 hidden md:block h-full overflow-hidden">
      <div className="flex justify-evenly items-center gap-2 py-6 h-[82px] border-gray-300 border-r-4 border-b-4">
        <img src={logo} className="w-6" />
        <span className="font-bold">Ductivity</span>
        <BsThreeDotsVertical />
      </div>
      <SubMenu />
    </div>
  );
};

const SubMenu = () => {
  const { tasks, changeTask } = useContext(taskContext);
  return (
    <div className="text-sm text-gray-500 border-gray-300 border-r-4 h-full flex flex-col gap-1">
      <div className="flex flex-col h-[20%] max-h-20 justify-around items-start pl-4 lg:pl-10 mt-2">
        <h2 className="flex items-center gap-2">
          <FaListUl />
          <span
            className="cursor-pointer"
            onClick={() => changeTask("all")}
          >
            My Tasks
          </span>
          <span className=" ml-8">{tasks.length}</span>
        </h2>
        <h2 className="flex items-center gap-2">
          <BsCalendar2CheckFill /> Activities
        </h2>
      </div>
      <Categories />
    </div>
  );
};
