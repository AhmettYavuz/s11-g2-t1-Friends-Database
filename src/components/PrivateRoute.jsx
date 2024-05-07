import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
  const { isUserLoggedIn } = useAuth();
  console.log("isUserLoggedIn2 :", isUserLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isUserLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
