//Reaat
import { createContext, useContext, useState,useEffect } from "react";

export type SessionContext = any[];

const SessionContext = createContext<SessionContext>(undefined);
const useSession = () => {
  const [session, setSession] = useContext(SessionContext);

  const handleSession = (value) => {
    setSession(value);
  };
  return { session, onChange: handleSession };
};

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

//get session from contract

  return (
    <SessionContext.Provider value={[session, setSession]}>
      {children}
    </SessionContext.Provider>
  );
};

export { useSession, SessionProvider };
