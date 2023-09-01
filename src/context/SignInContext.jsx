import { createContext, useEffect, useState } from "react";

export const SignInContext = createContext();
export const SignInContextProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    console.log("in signed in ?", isSignedIn);
  }, [isSignedIn]);
  return (
    <SignInContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </SignInContext.Provider>
  );
};
