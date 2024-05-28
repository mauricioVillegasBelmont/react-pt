import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useUserContext, useUserSetContext } from "../../utils/UserProvider";

function NavBar() {
  const userContext = useUserContext();
  const setUserContext = useUserSetContext();

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };


  const logoutHandler = () => {
    if (setUserContext) {
      setUserContext(null);
    }
  };

  const navRoutes = [
    {
      path: "/",
      text: "Inicio",
    },
    {
      path: "/locations",
      text: "Ubicaciones",
    },
  ];
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleClass}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav
        className={
          isActive
            ? "collapse navbar-collapse show"
            : "collapse navbar-collapse"
        }
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          {navRoutes.map((item, index) => (
            <li className="nav-item" key={index}>
              <NavLink to={item.path} className="nav-link">
                {item.text}
              </NavLink>
            </li>
          ))}
          {!userContext && (
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Inicio de sesión
              </NavLink>
            </li>
          )}
          {userContext && (
            <>
              <li className="nav-item">
                <NavLink to="/favorites" className="nav-link">
                  Favoritos
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={logoutHandler}
                >
                  log out
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
