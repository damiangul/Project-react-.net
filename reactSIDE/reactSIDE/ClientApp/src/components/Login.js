import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { switchNav } from "../redux/switchNav";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [falseLogin, setFalseLogin] = useState(false);
  let loggedUser;
  const dispatch = useDispatch();
  let history = useHistory();

  const loginOnChange = (e) => {
    setLogin(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        "userPassword": password,
        "userLogin": login
      }),
    };
    await fetch(
      "https://localhost:44304/api/login/",
      requestOptions
    ).then((response) => response.json()).then((res) => {
      loggedUser = res;
    });

    if (loggedUser.status === 404) {
      setFalseLogin(true);
      setLogin("");
      setPassword("");
      return 0;
    } else {
      setFalseLogin(false);
      localStorage.setItem("id", JSON.stringify(loggedUser));
      dispatch(switchNav("XDDDD"))
      history.push("/");
    }
  };

  return (
    <div className="bg-background-ballons h-imageTheWeeknd">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 border w-3/4 rounded-3xl md:w-1/2 xl:w-1/4 bg-white">
        <h2 className="text-center font-mono h-1/3 flex justify-center items-center text-2xl">
          Login to gbshop.com
        </h2>
        {falseLogin ? (
          <p className="text-center text-red-600 uppercase">False login</p>
        ) : null}
        <form className="flex flex-col w-4/5 mx-auto mb-16 h-2/4 justify-around">
          <input
            placeholder="Login"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="login"
            value={login}
            onChange={loginOnChange}
          />
          <input
            placeholder="Password"
            className="border-2 p-3 rounded-full outline-none"
            type="password"
            name="name"
            value={password}
            onChange={passwordOnChange}
          />
          <button
            className="w-full md:w-32 mx-auto p-1 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none"
            onClick={loginSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
