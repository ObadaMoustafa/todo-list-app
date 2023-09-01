import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SignInContextProvider } from "./context/SignInContext";
import { IsLoadingContextProvider } from "./context/IsLoadingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <SignInContextProvider>
      <IsLoadingContextProvider>
        <App />
      </IsLoadingContextProvider>
    </SignInContextProvider>
  </React.Fragment>
);
