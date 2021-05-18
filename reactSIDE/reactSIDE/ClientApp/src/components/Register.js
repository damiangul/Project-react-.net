import React, { useEffect, useState } from "react";

export default function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [adres, setAdres] = useState("");
  const [registered, setRegistered] = useState(false);

  const loginOnChange = (e) => {
    setLogin(e.target.value);
  };

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const surnameOnChange = (e) => {
    setSurname(e.target.value);
  };

  const adresOnChange = (e) => {
    setAdres(e.target.value);
  };

  const registerNewUser = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  useEffect(() => {
    if (registered) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          userPassword: password,
          userLogin: login,
          userRole: "Typical user",
          Imie: name,
          Nazwisko: surname,
          adresPart1: adres,
          cash: 0
        }),
      };
      fetch(
        "https://localhost:44304/api/users/",
        requestOptions
      ).then((response) => response.json());
    }
  }, [registered]);

  return (
    <div className="bg-background-ballons h-imageTheWeeknd">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4/5 border w-3/4 rounded-3xl md:w-1/2 xl:w-1/4 bg-white">
        <h2 className="text-center font-mono h-1/3 flex justify-center items-center text-2xl">
          {registered ? <h2>You can login in now!</h2> : <h2>Register form</h2>}
        </h2>

        <form className="flex flex-col w-4/5 mx-auto mb-16 h-2/4 justify-around">
          <input
            placeholder="login"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="login"
            value={login}
            onChange={loginOnChange}
          />
          <input
            placeholder="password"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="password"
            value={password}
            onChange={passwordOnChange}
          />

           <input
            placeholder="name"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="name"
            value={name}
            onChange={nameOnChange}
          />

          <input
            placeholder="surname"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="surname"
            value={surname}
            onChange={surnameOnChange}
          />
          <input
            placeholder="adres"
            className="border-2 p-3 rounded-full outline-none"
            type="text"
            name="adres"
            value={adres}
            onChange={adresOnChange}
          />
          <button
            className="w-full md:w-32 mx-auto p-1 rounded-2xl bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition focus:outline-none"
            onClick={registerNewUser}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
