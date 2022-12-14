import React, { useContext } from "react";
import { activiteContext } from "../context/ActivitieProvider";
import { taskContext } from "../context/TaskProvider";
import { useData } from "../hooks/useData";
import { useError } from "../hooks/useError";
import Select from "react-select";

export const Task = ({ setViewTask }) => {
  const { cate } = useContext(activiteContext);
  const { addTask } = useContext(taskContext);
  const { data, handleChange, setData } = useData();
  const { error, setError } = useError();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data === "") {
      setError("Please write something");
    } else {
      addTask(data);
      setViewTask(false);
    }
  };

  const changeCategorie = (e) =>
    setData({ ...data, categorie: `${e.value}` });

  return (
    <form
      className="absolute z-10 top-2/4 left-2/4 mt-[-120px] ml-[-160px] flex flex-col self-start justify-center items-start gap-1 bg-white rounded-lg w-80 h-60 border py-2 pl-4"
      onSubmit={handleSubmit}
    >
      <Inputcito
        title={"Title"}
        type={"text"}
        name={"title"}
        handleChange={handleChange}
      />
      <Inputcito
        title={"Description"}
        type={"text"}
        name={"description"}
        handleChange={handleChange}
      />
      <div className="absolute right-2 top-2">
        <Select
          options={cate.map((item) => ({
            label: item.name,
            value: item.name,
          }))}
          onChange={changeCategorie}
        />
      </div>
      {error !== "" ? (
        <p className="text-red-500 text-center mx-auto">{error}</p>
      ) : (
        ""
      )}
      <div className="w-[90%] mx-auto flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Create Task
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setViewTask(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const Inputcito = ({ title, handleChange, type, name }) => {
  return (
    <div className="flex flex-col gap-2 w-2/3 h-1/3">
      <label htmlFor={name} className="self-start">
        {title}
      </label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        autoComplete="off"
        className="ml-6 outline-none border-b-2 border-black bg-transparent"
      />
    </div>
  );
};

const Bottoncitos = ({ color, name, onClick }) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-full`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
