//Reat
import { createContext, useContext } from "react";

export type Session

const SessionContext = createContext(null);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ value, childeren }) => {
  return (<SessionContext.Provider></SessionContext.Provider>);
};

export {};
