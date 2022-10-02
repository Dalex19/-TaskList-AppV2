import womanN from "../../assets/womanN.jpg";
import LogIn from "./LogIn";
import { BsSoundwave } from "react-icons/bs";
import { useState } from "react";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [viewActive, setViewActive] = useState(false);

  const navigate = useNavigate();

  const changeView = () => setViewActive(!viewActive);

  return (
    <div className="w-[90%] lg:w-[90%] min-h-[650px] max-w-[1200px] h-4/5 overflow-hidden flex flex-row-reverse rounded-lg shadow-xl">
      <div className="w-2/3 hidden md:block h-full relative ">
        <img
          src={womanN}
          className="w-full relative h-full object-cover"
        />
        <div className="absolute flex justify-between top-2  w-[90%]">
          <span className="text-3xl">
            <BsSoundwave />
          </span>
          <button
            onClick={changeView}
            className="w-22 text-lg px-2 rounded-xl text-white font-bold bg-lime-600 transition-all ease-in hover:opacity-75"
          >
            {!viewActive ? "Sig in" : "Log in"}
          </button>
        </div>
      </div>
      {!viewActive ? (
        <LogIn navigate={navigate} />
      ) : (
        <SignIn navigate={navigate} changeView={changeView} />
      )}
    </div>
  );
}
