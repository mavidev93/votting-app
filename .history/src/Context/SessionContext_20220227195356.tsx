//Reaat
import { createContext, useContext, useState,useEffect } from "react";

//Third Party
import { ethers } from "hardhat";
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

//Effects
//get session from contract
useEffect(() => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contract = new ethers.Contract(
    votingProposalsAddress,
    VotingProposals.abi,
    provider
  );

  //if session is null getSession
  !session && getSession();

  //set event listener
  contract.on("SessionChange", (session) => {
    console.log(session);
    setSession(session);
  });

  async function getSession() {
    const sess = await contract.session();
    console.log(sess);
    setSession(sess);
  }

  //clear event listener
  return function clear() {
    contract.removeAllListeners("SessionChange");
  };
}, []);
  return (
    <SessionContext.Provider value={[session, setSession]}>
      {children}
    </SessionContext.Provider>
  );
};

export { useSession, SessionProvider };
