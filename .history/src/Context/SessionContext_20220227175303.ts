//Reat
import { createContext,use } from "react";
import { useContext } from 'react';

const SessionContext = createContext(null)
const useSession = useContext


export default SessionContext