import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { switchNav } from "../redux/switchNav"
 
export default function LogoutButton() {
  let history = useHistory();
  const dispatch = useDispatch();

  const logoutUser = async () => {

      await fetch("https://reactside20210516201046.azurewebsites.net/api/login/");
    localStorage.removeItem("id");
    dispatch(switchNav("XDDD"))
    history.push("/");

  };

  return (
    <button onClick={logoutUser} className="focus:outline-none p-4">
      Logout
    </button>
  );
}
