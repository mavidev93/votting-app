//Reat
import { createContext, useContext } from "react";

export type SessionContext ={
    session:string
    setSession:(session:string)=>void
}

const SessionContext = createContext<SessionContext></SessionContext>(null);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ value, childeren }) => {
  return (<SessionContext.Provider></SessionContext.Provider>);
};

export {};
