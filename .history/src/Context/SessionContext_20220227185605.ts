//Reat
import { createContext, useContext } from "react";

export type SessionContext ={
    session:string
    setSession:(session:st)
}

const SessionContext = createContext(null);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ value, childeren }) => {
  return (<SessionContext.Provider></SessionContext.Provider>);
};

export {};
