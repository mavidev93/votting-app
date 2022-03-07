//Reat
import { createContext, useContext, useState } from "react";

export type SessionContext = any[];

const SessionContext = createContext<SessionContext>(undefined);
const useSession = () => {
  const [session, setSession] = use
}

const SessionProvider = ({ children }) => {
const [session, setSession] = useState(null)
  return (
    <SessionContext.Provider value={[session,setSession]}>{children}</SessionContext.Provider>
  );
};

export { useSession,SessionProvider };
