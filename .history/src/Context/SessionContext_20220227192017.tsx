//Reat
import { createContext, useContext, useState } from "react";

export type SessionContext = {
  session: string;
  setSession: (session: string) => void;
};

const SessionContext = createContext<SessionContext>(undefined);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ children }) => {
const [se]
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export { useSession,SessionProvider };
