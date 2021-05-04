import React from "react";
import { useDispatch } from "react-redux";
import { loggingUser } from "../redux/loggedUserActions";
import { useHistory } from "react-router-dom";

export default function LogoutButton() {
  const dispatch = useDispatch();
  let history = useHistory();

  const logoutUser = () => {
    dispatch(loggingUser("", null));
    history.push("/");
  };

  return (
    <button onClick={logoutUser} className="focus:outline-none p-4">
      Logout
    </button>
  );
}
