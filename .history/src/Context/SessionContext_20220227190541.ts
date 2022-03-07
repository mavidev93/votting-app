//Reat
import { createContext, useContext } from "react";

export type SessionContext ={
    session:string
    setSession:(session:string)=>void
}

const SessionContext = createContext<SessionContext>(undefined);
const useSession = () => useContext(SessionContext);

const SessionProvider = ({ value, childeren }) => {
  return (<SessionContext.Provider value='hasan'>
    <div></div>
  </SessionContext.Provider>);
};

export {useSession};
