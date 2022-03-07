//Reat
import { createContext,useContext } from "react";

const SessionContext = createContext(null)
const useSession =()=> useContext(SessionContext);

const SessionProvider = ({value, childeren})=>{
    return (
        <essionContext.Provider>
        </.Provider> 
    )
}


export {}