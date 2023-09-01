import { createContext, useState } from "react";

export const HandleProcessesContext = createContext();
export const HandleProcessesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const sharedValues = {
    isLoading,
    setIsLoading,
  };
  return (
    <HandleProcessesContext.Provider value={sharedValues}>
      {children}
    </HandleProcessesContext.Provider>
  );
};
