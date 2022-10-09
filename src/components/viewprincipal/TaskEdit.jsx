import React from "react";
import { BsSave } from "react-icons/all";
import { useData } from "../hooks/useData";
import { useError } from "../hooks/useError";

function TaskEdit({ task, setUpdateTask, id, editTask }) {
  const { data, handleChange } = useData();
  const { error, setError } = useError();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data === "") {
      setError("Please write something");
    } else {
      editTask(data, id);
      setUpdateTask(false);
    }
  };
  return (
    <form
      className="w-[175px] md:w-[200px] h-[100px] md:h-[150px] rounded-lg  border-2 border-white flex flex-col justify-around items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        className="w-[95%] outline-none border-b-2 border-black bg-transparent"
        onChange={handleChange}
        autoFocus
        autoComplete="off"
      />
      <input
        className="w-[95%] h-11 outline-none border-b-2 border-black bg-transparent"
        type="text"
        name="description"
        onChange={handleChange}
        autoComplete="off"
      />
      {error !== "" ? (
        <p className="text-red-500 text-center mx-auto text-xs">
          {error}
        </p>
      ) : (
        ""
      )}
      <button>
        <BsSave />
      </button>
    </form>
  );
}

export default TaskEdit;
