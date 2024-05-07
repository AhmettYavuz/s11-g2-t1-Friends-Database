import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./index.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
