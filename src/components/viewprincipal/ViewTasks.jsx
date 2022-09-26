import { useContext, useEffect, useState } from "react";
import { RiDeleteBin7Line, FiEdit } from "react-icons/all";
import TaskEdit from "./TaskEdit";

const ViewTasks = ({ task, removeTask, index, editTask }) => {
  const [updateTask, setUpdateTask] = useState(false);

  return (
    <>
      {!updateTask ? (
        <div className="w-[200px] h-[150px] border-2 border-white flex flex-col justify-around rounded-lg transition-all ease-in-out hover:scale-105">
          <h3 className=" flex justify-around items-center font-semibold text-violet-600">
            {task.title}
            <div className="flex gap-2 text-lg text-black">
              <span
                className="cursor-pointer"
                onClick={() => removeTask(index)}
              >
                <RiDeleteBin7Line />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => setUpdateTask(true)}
              >
                <FiEdit />
              </span>
            </div>
          </h3>
          <p className="pl-2">{task.description}</p>
        </div>
      ) : (
        <TaskEdit
          task={task}
          setUpdateTask={setUpdateTask}
          id={index}
          editTask={editTask}
        />
      )}
    </>
  );
};

export default ViewTasks;
