import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces";

import Header from "../components/headerComponents/Header";
import NavBar from "../components/headerComponents/NavBar";

import { useUserContext, useUserSetContext } from "../utils/UserProvider";



function Login() {
  const navigate = useNavigate();

  const userContext = useUserContext();
  const setUserContext = useUserSetContext();


  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    favorites: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (setUserContext) {
      setUserContext(user);
    }
    navigate("/favorites");
  };

  return (
    <>
      <Header>
        <NavBar />
      </Header>

      <main className="container py-4">
        <section className="row">
          <div className="col py-5">
            <h1 className="text-white">Log-In:</h1>
            {userContext && (
              <p className="text-white">you alreaddy logged in:</p>
            )}
            {!userContext && (
              <form className="row g-3" onSubmit={submitHandler}>
                <div className="col-auto">
                  <label htmlFor="usernameInput" className="visually-hidden">
                    username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameInput"
                    placeholder="username"
                    autoComplete="username"
                    required={true}
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="inputPassword" className="visually-hidden">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    autoComplete="current-password"
                    required={true}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">
                    Confirm identity
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
