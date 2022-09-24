import { useContext, useEffect } from "react";
import { RiDeleteBin7Line, FiEdit } from "react-icons/all";
import { taskContext } from "../context/TaskProvider";

const ViewTasks = () => {
  const { tasks, setTasks } = useContext(taskContext);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  const removeTask = (id) => {
    const updateTask = tasks.filter((item, index) => index !== id);
    setTasks(updateTask);
  };

  return (
    <div className="w-full h-[78%] bg-gray-300 pt-4 mx-auto flex flex-wrap justify-center gap-4">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="w-[200px] h-[150px] border-2 border-white flex flex-col justify-around rounded-lg transition-all ease-in-out hover:scale-105"
        >
          <h3 className=" flex justify-around items-center font-semibold text-violet-600">
            {task.title}
            <div className="flex gap-2 text-lg text-black">
              <span onClick={() => removeTask(index)}>
                <RiDeleteBin7Line />
              </span>
              <span>
                <FiEdit />
              </span>
            </div>
          </h3>
          <p className="pl-2">{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewTasks;
