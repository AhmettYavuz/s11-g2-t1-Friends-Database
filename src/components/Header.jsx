import React, { useContext } from "react";
import { AuthContext, useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const { isUserLoggedIn } = useContext(AuthContext);
  const { logOut } = useAuth();
  const { push } = useHistory();

  console.log("isUserLoggedIn: ", isUserLoggedIn);
  const handleClick = (e) => {
    const name = e.target.name;

    const url =
      name === "login"
        ? "/login"
        : name === "friendslist"
        ? "/friends"
        : name === "addfriend"
        ? "/friends/add"
        : "logout";

    if (url === "logout") {
      logOut();
    } else {
      push(url);
    }
  };

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {isUserLoggedIn ? (
            <>
              <button name="friendslist" onClick={handleClick}>
                FRIENDS LIST
              </button>
              <button name="addfriend" onClick={handleClick}>
                ADD FRIEND
              </button>
              <button name="logout" onClick={handleClick}>
                LOGOUT
              </button>
            </>
          ) : (
            <button name="login" onClick={handleClick}>
              LOGIN
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
