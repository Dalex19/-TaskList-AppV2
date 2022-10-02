import React, {useContext} from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Presentation = () => {
  const navigate = useNavigate()
  const { user } = useContext(userContext);

  const activities = [
    { icon: "🙆🏽", title: "stretching" },
    { icon: "🎻", title: "music" },
    { icon: "🧑🏻‍💻", title: "study" },
    { icon: "🏃🏼‍♀️", title: "run" },
    { icon: "👨‍👩‍👧‍👧", title: "family" },
    { icon: "🐈‍⬛", title: "pets" },
    { icon: "🥀", title: "floors" },
    { icon: "🍔", title: "food" },
    { icon: "☕", title: "break" },
    { icon: "🥂", title: "celebrate" },
    { icon: "🏋🏻‍♀️", title: "gym" },
    { icon: "⏰", title: "wake up" },
  ];

  return (
    <div className="flex font-poppins min-h-[650px] flex-col md:h-3/4 w-3/4 h-[780px] rounded-md bg-white justify-evenly">
      <div className="pl-6">
        <h1 className="text-3xl">Welcome {(user.name) ? user.name : user.email}</h1>
        <p className="text-gray-500">
          Having good habits is important for our life
        </p>
      </div>
      <div className="md:w-4/5 w-[90%] h-[54%] overflow-auto py-2 mx-auto grid grid-flow-row grid-cols-2  md:grid-cols-4 place-items-center gap-y-2">
        {activities.map((item, i) => (
          <Test key={i} icon={item.icon} title={item.title} />
        ))}
      </div>
      <button className="text-white py-1 self-center font-semibold rounded-md bg-black w-2/3 text-center max-w-[500px]"
        onClick={() => navigate("/dashboard")}
      >
        Get Started!
      </button>
    </div>
  );
};

const Test = ({ icon, title }) => {
  return (
    <div className="rounded-lg border-2 border-gray-400 hover:border-lime-500 py-2 w-[80%]">
      <p className="text-2xl  text-center">{icon}</p>
      <p className="text-center">{title}</p>
    </div>
  );
};
