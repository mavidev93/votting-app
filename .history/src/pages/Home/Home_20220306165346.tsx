//React
import { useEffect, useState } from "react";

//Third Party

//App
import { useSession } from "../../Context/SessionContext";
import { requestAccounts } from "../../helpers/metamaskHelpers";

import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";
import RequestAccount from "../../Components/RequestAccount/RequestAccount";

declare const window: any;

function Home() {
  //localState
  const [showAlert, setShowAlert] = useState(true);

  //context
  const { session } = useSession();
  console.log("session is:", session);

  //Effects
  useEffect(() => {
    const { ethereum } = window;
    let isMounted = true;

    checkAccount();

    return function clear() {
      isMounted = false;
      ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
    function checkAccount() {
      // const accounts = await provider.send("eth_accounts", []);
      // console.log(accounts);
      // accounts.length > 0 && setShowAlert(false);
      ethereum.on("accountsChanged", handleAccountsChanged);
    }

    function handleAccountsChanged(accounts) {
      console.log("from event handler");
      if (accounts.length > 0) {
        setShowAlert(false);
      } else {
        setShowAlert(true);
      }
    }
  }, []);
  return (
    <div>
      {showAlert && <RequestAccount />}
      <SendProposal />
      {session === "getVotes" ||
        (session === "showResults" && <ProposalsBoard />)}
    </div>
  );
}

export default Home;
