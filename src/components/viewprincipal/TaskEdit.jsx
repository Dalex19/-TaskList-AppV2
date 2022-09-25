import React from 'react'
import {BsSave} from 'react-icons/all'
import {useData} from '../hooks/useData'

function TaskEdit({task, setUpdateTask, id, editTask}) {

  const {data, handleChange} = useData()
  const handleSubmit = e => {
    e.preventDefault()
    editTask(data, id)
    setUpdateTask(false)
    
  }
  return (
    <form className='w-[200px] rounded-lg h-[150px] border-2 border-white flex flex-col justify-around items-center'
      onSubmit={handleSubmit}
    >
        <input type="text"
          name='title'
          className='w-[95%] outline-none border-b-2 border-black bg-transparent'
           
          onChange={handleChange}
          autoFocus
          />
        <input className='w-[95%] h-11 outline-none border-b-2 border-black bg-transparent' 
          type="text"
          name='description'
          onChange={handleChange}
           />
        <button>
            <BsSave />
        </button>
    </form>
  )
}

export default TaskEdit