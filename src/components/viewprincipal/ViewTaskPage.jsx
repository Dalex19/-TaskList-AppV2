import React, { useContext } from "react";
import { taskContext } from "../context/TaskProvider";
import ViewTasks from "./ViewTasks";

function ViewTaskPage() {
  const { taskView } = useContext(taskContext);
  const removeTask = (id) => {
    const updateTask = tasks.filter((item, index) => index !== id);
    setTasks(updateTask);
  };
  const editTask = (task, id) => {
    const updateList = tasks.map((item, index) => {
      if (index === id) {
        item = task;
      }
      return item;
    });
    setTasks(updateList);
  };

  return (
    <div className="w-full h-[78%] bg-gray-300 pt-4 mx-auto flex flex-wrap justify-center gap-4">
      {taskView.map((item, index) => (
        <ViewTasks
          key={index}
          task={item}
          removeTask={removeTask}
          editTask={editTask}
          index={index}
        />
      ))}
    </div>
  );
}

export default ViewTaskPage;
