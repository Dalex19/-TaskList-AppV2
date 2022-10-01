import React, { createContext, useState, useEffect } from "react";

export const taskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskView, setTaskView] = useState(tasks);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    setTaskView(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const changeTask = (categorie) => {
    if (categorie === "all") {
      setTaskView(tasks);
    } else {
      const taskUpdate = tasks.filter(
        (task) => task.categorie === categorie
      );
      setTaskView(taskUpdate);
    }
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const removeTask = (id) => {
    const taskFilters = tasks.filter((item, index) => index !== id);
    setTasks(taskFilters);
  };

  return (
    <taskContext.Provider
      value={{
        taskView,
        tasks,
        addTask,
        setTasks,
        removeTask,
        changeTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};
