import React, { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function SignIn({ changeView, navigate }) {

  const { handleChange, handleSubmit } = useContext(userContext);

  return (
    <div className="w-full md:w-3/5 h-full bg-gray-100 flex flex-col justify-around items-center">
      <section className=" w-[90%] ">
        <h2 className="text-2xl">Create Account</h2>
        <p className="text-sm text-gray-500">
          Get Access to exclusive by creating an account
        </p>
      </section>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-[90%] mx-auto flex flex-col gap-6 py-2">
          <Labelcito
            title={"Name"}
            type={"text"}
            placeholder={"Alex"}
            handleChange={handleChange}
            name={"name"}
          />
          <Labelcito
            title={"LastName"}
            type={"text"}
            placeholder={"Cruz"}
            handleChange={handleChange}
            name={"lastname"}
          />

          <Labelcito
            title={"E-mail"}
            type={"email"}
            placeholder={"alexfco@gmail.com"}
            handleChange={handleChange}
            name={"email"}
          />
          <Labelcito
            title={"Password"}
            type={"password"}
            placeholder={"******"}
            handleChange={handleChange}
            name={"password"}
          />
          <Labelcito
            title={"Repeat Password"}
            type={"password"}
            placeholder={"******"}
            handleChange={handleChange}
            name={"repeat-password"}
          />
        </div>

        <div className="text-sm w-[90%] mx-auto flex flex-col">
          <span className="w-full flex gap-2">
            <input type="checkbox" name="" id="" /> I've read and
            accept the
            <span className="text-lime-500">
              Terms and Conditions
            </span>
          </span>
          <span className="w-full flex gap-2">
            <input type="checkbox" name="" id="" /> Subscribe the
            newsletter to stat up to date
          </span>
        </div>
        <button
          onClick={() => navigate("/preview")}
          className="py-1 px2 bg-lime-400 w-[90%] rounded-sm mx-auto font-semibold"
        >
          Create my account
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          className="text-lime-500 cursor-pointer"
          onClick={changeView}
        >
          Log In
        </span>
      </p>
    </div>
  );
}

const Labelcito = ({ title, type, name, placeholder,handleChange}) => {
  return (
    <label className="flex justify-between">
      {title}
      <input
        type={type}
        className="rounded-md min-w-[50px] pl-2 py-1 shadow-sm"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};
