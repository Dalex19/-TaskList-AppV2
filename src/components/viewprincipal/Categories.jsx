import React, { useState, useContext } from "react";
import { MdAdd } from "react-icons/all";
import {activiteContext}  from "../context/ActivitieProvider";
import { useError } from "../hooks/useError";
import { taskContext } from "../context/TaskProvider";


export const Categories = () => {
  const [on, setOn] = useState(false);
  const {cate, createdCategorie, deleteCate} = useContext(activiteContext);
  const {changeTask} = useContext(taskContext)
  
  const handleClick = () => setOn(true);
  return (
    <div className=" py-2 h-[70%] flex flex-col gap-2">
      <h2 className="flex justify-around font-bold text-lg items-center">
        Categories
        <button
          className="bg-gray-500 rounded-full px-1 py-1 text-md text-white text-center transition-all ease-in-out hover:bg-gray-400"
          onClick={handleClick}
        >
          <MdAdd />
        </button>
      </h2>
      {on ? (
        <AddCategories
          setOn={setOn}
          createCategorie={createdCategorie}
        />
      ) : (
        ""
      )}
      <ul className="h-[90%] flex flex-col justify-start gap-2 lg:pl-10 items-start pl-4">
        {cate.length > 0
          ? cate.map((item, index) => (
              <li
                key={index}
                className="w-full lg:w-3/6 flex items-center justify-around lg:justify-between cursor-pointer"
                onClick={() => changeTask(`${item.name}`)}
              >
                {item.name}
                <button
                  className="text-2xl text-red-600"
                  onClick={() => deleteCate(index)}
                >
                  -
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

const AddCategories = ({ setOn, createCategorie }) => {
  const [data, setData] = useState("");
  const {error, setError} = useError()
  
  const addTask = (e) => {
    e.preventDefault();
    localStorage.setItem("catename", data);
    if(data === '') {
      setError("Please write something")
    } else {
      setOn(false)
      createCategorie(data)
    }
    
  };

  return (
    <form
      className="w-full flex flex-col lg:w-3/4 lg:mx-auto"
      onSubmit={addTask}
    >
      <div className="w-full flex justify-around">
        <input
        type="text"
        className="py-1 pl-2 w-3/5 text-md bg-transparent border-b focus:outline-none"
        name="task"
        autoFocus
        onChange={(e) => setData(e.target.value)}
      />
      <button className="bg-gray-400 rounded-xl w-[25%] text-black">
        Save
      </button>
      </div>
      
      {error !== "" ? <p className="text-red-400 text-center">{error}</p> : ""}
    </form>
  );
};
