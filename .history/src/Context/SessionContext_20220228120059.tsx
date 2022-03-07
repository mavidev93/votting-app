//Reaat
import { createContext, useContext, useState, useEffect } from "react";

//Third Party
import { ethers } from "ethers";

//App
import VotingProposals from "../artifacts/contracts/VotingProposals.sol/VotingProposals.json";
import { votingProposalsAddress } from "../staticData";

import { requestAccounts } from "../helpers/metamaskHelpers";

export type SessionContext = any[];
declare const window: any;

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
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    // let currentAccount = null;

    // ethereum
    //   .request({ method: "eth_accounts" })
    //   .then(handleAccountsChanged)
    //   .catch((err) => {

    //     console.error(err);
    //   });

    // requestAccounts(ethereum);

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
      // const res = await provider.send("eth_requestAccounts", []);
      // console.log(res);
      console.log("from get session");
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
