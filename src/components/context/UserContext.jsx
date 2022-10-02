import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

    useEffect(() => {
      localStorage.setItem('credentials', JSON.stringify(user))
    }, [user])

  const handleSubmit = e =>  e.preventDefault();

  return (
    <userContext.Provider
      value={{ user, handleChange, handleSubmit }}
    >
      {children}
    </userContext.Provider>
  );
};
