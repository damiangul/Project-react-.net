import React from "react";
import { useDispatch } from "react-redux";
import { loggingUser } from "../redux/loggedUserActions";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(loggingUser("", null));
  };

  return (
    <button onClick={logoutUser} className="focus:outline-none p-4">
      Logout
    </button>
  );
}
