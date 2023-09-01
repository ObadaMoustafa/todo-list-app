import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SignInContextProvider } from "./context/SignInContext";
import { HandleProcessesContextProvider } from "./context/HandleProcessesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <SignInContextProvider>
      <HandleProcessesContextProvider>
        <App />
      </HandleProcessesContextProvider>
    </SignInContextProvider>
  </React.Fragment>
);
