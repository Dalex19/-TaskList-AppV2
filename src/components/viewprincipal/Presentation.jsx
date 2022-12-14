import React, { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Presentation = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);

  const activities = [
    { icon: "๐๐ฝ", title: "stretching" },
    { icon: "๐ป", title: "music" },
    { icon: "๐ง๐ปโ๐ป", title: "study" },
    { icon: "๐๐ผโโ๏ธ", title: "run" },
    { icon: "๐จโ๐ฉโ๐งโ๐ง", title: "family" },
    { icon: "๐โโฌ", title: "pets" },
    { icon: "๐ฅ", title: "floors" },
    { icon: "๐", title: "food" },
    { icon: "โ", title: "break" },
    { icon: "๐ฅ", title: "celebrate" },
    { icon: "๐๐ปโโ๏ธ", title: "gym" },
    { icon: "โฐ", title: "wake up" },
  ];

  return (
    <div className="flex font-poppins flex-col md:h-3/4 h-[85%] w-[90%] md:w-4/6 rounded-md bg-white justify-evenly">
      <div className="pl-1 md:self-center">
        <h1 className="text-lg md:text-3xl">
          Welcome {user.name ? user.name : user.email}
        </h1>
        <p className="text-gray-500 text-sm">
          Having good habits is important for our life
        </p>
      </div>
      <div className="md:w-4/5 w-[90%] h-[65%] overflow-auto py-2 mx-auto grid grid-flow-row grid-cols-2  md:grid-cols-4 place-items-center gap-y-2">
        {activities.map((item, i) => (
          <Test key={i} icon={item.icon} title={item.title} />
        ))}
      </div>
      <button
        className="text-white py-1 self-center font-semibold rounded-md bg-black w-2/3 text-center max-w-[500px]"
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
