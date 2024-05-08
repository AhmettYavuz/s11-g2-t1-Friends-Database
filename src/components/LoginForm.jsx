import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    login(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginFormMainDiv">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default LoginForm;
