import React, { useContext } from "react";
import { userContext } from "../context/UserContext";


export default function LogIn() {
  const {handleChange, handleSubmit} = useContext(userContext)
  
  return (
    <div className="w-full md:w-3/5 h-full bg-white flex flex-col">
      <nav className="flex justify-center mt-4">
        <ul className="flex font-poppins justify-evenly w-full text-sm">
          <li>Colection</li>
          <li>Record</li>
          <li>Listen Your Token</li>
        </ul>
      </nav>
      <div className=" w-[85%] max-w-[350px] font-poppins mx-auto my-auto h-3/5">
        <h1 className="text-3xl tracking-wider font-bold">Log In</h1>
        <form
          onSubmit={handleSubmit}
          className="h-3/4 flex flex-col my-5 justify-center gap-6"
        >
          <label className="mx-auto flex w-full flex-col gap-2">
            <span className="text-sm after:content-['*'] after:ml-0.5 after:text-red-500 text-black">E-mail</span>{" "}
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="E-mail"
              className="peer border-b-2 border-gray-500 outline-none "
              autoComplete="off"
            />
            
          </label>
          <label className="mx-auto w-full flex flex-col gap-2">
            <span className="text-sm text-black after:content-['*'] after:ml-0.5 after:text-red-500">Password</span>{" "}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="border-b-2 border-gray-500 outline-none"
            />
          </label>
          <div className="w-full flex justify-between text-sm">
            <span>
              {" "}
              <input type="checkbox" name="" id="" /> Remember me
            </span>
            <span>forget password?</span>
          </div>
          <button className="border w-full py-1 font-bold tracking-wide bg-lime-400 rounded-lg mx-auto transition-all ease-in hover:bg-lime-600">
            Log In
          </button>
          <div className="text-center w-[90%] mx-auto md:hidden">
            <span
              className='relative before:content-[""] before:top-[0.6em] after:left-[4.4em] before:right-[4.4em] after:top-[0.6em]  before:absolute before:w-[80px] before:h-[2px] before:bg-gray-500
                    after:content-[""] after:absolute after:w-[80px] after:h-[2px] after:bg-gray-500'
            >
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
