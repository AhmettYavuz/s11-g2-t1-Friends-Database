import React from "react";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AuthContextProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/">
            <FriendsList />
          </PrivateRoute>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute exact path="/friends ">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute exact path="/friends/add">
            <AddFriend />
          </PrivateRoute>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
