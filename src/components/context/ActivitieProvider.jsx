import React, { createContext, useState } from "react";

export const activiteContext = createContext();

export const ActivitieProvider = ({ children }) => {
  const [cate, setCate] = useState([]);
  const createdCategorie = (newCate) => {
    !cate.find((cate) => cate.name == newCate)
      ? setCate([...cate, { name: newCate }])
      : "";
  };
  const deleteCate = (indexItem) => {
    setCate((prevState) =>
      prevState.filter((cate, index) => index !== indexItem)
    );
  };

  return (
    <activiteContext.Provider
      value={{ cate, createdCategorie, deleteCate }}
    >
      {children}
    </activiteContext.Provider>
  );
};
