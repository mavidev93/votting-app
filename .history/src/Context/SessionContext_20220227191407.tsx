//Reat
import { createContext, useContext } from "react";

export type SessionContext = {
  session: string;
  setSession: (session: string) => void;
};

const SessionContext = createContext<string>(undefined);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ value, childeren }) => {
  return <SessionContext.Provider value={value}></SessionContext.Provider>;
};

export { useSession };
