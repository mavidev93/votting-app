//Reat
import { createContext, useContext } from "react";

export type SessionContext = {
  session: string;
  setSession: (session: string) => void;
};

const SessionContext = createContext<SessionContext>(undefined);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ children }) => {
  
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export { useSession,SessionProvider };
