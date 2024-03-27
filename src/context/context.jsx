import { createContext, useContext } from "react";

export const ProjContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  return (
    <ProjContext.Provider value={{ data: "hello" }}>
      {children}
    </ProjContext.Provider>
  );
};

export const useProjContext = () => useContext(ProjContext);
