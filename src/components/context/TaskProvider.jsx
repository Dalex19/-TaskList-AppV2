import React, {createContext, useState} from 'react'

export const taskContext = createContext()

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([
      {title: 'Cenar', description: 'Comer comidita saludable', categorie: 'Food'},
      {title: 'Salud', description: 'Ejercitarme al menos 15 minutos al dia', categorie: 'Exercise'},
      {title: 'Cenar', description: 'Comer comidita saludable', categorie: 'Food'},
      {title: 'Salud', description: 'Ejercitarme al menos 15 minutos al dia', categorie: 'Exercise'}
    ])
    const addTask = (task) => {
        setTasks([...tasks, task])
    }
    const removeTask = id => {
      const taskFilters = tasks.filter((item, index) => index !== id)
      setTasks(taskFilters)
    }
  return (
    <taskContext.Provider value={{tasks, addTask, setTasks ,removeTask}}>
       {children} 
    </taskContext.Provider>
  )
}
