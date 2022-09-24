import React from "react";

export const Activities = ({setViewTask}) => {
  return (
    <div className="flex justify-evenly py-2 ">
      <div className="">
        <h1 className="text-gray-600 text-xl ">
          Create a new activite
        </h1>
        <p className="text-gray-500 ">
          Associeted with yours categories
        </p>
      </div>
      <button className="bg-blue-600 uppercase font-bold text-white text-center text-lg my-auto p-1 px-3 rounded-lg transition-all ease-linear hover:bg-blue-700"
        onClick={() => setViewTask(true)}
      >
        + Do it!
      </button>
    </div>
  );
};
