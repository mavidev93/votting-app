//Reat
import { createContext, useContext, useState } from "react";

export type SessionContext = {
  [
  session: string,
  setSession: (session: string) => void];
};

const SessionContext = createContext<SessionContext>(undefined);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ children }) => {
const [session, setSession] = useState(null)
  return (
    <SessionContext.Provider value={[session,setImmediate]}>{children}</SessionContext.Provider>
  );
};

export { useSession,SessionProvider };
