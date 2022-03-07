//Reat
import { createContext,useContext } from "react";

const SessionContext = createContext(null)
const useSession =()=> useContext(SessionContext)


export default SessionContext