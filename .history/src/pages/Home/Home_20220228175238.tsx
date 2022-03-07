//React
import { useEffect, useState } from "react";

//App
import { useSession } from "../../Context/SessionContext";
import { requestAccounts } from "../../helpers/metamaskHelpers";
//Third Party
import { ethers } from "ethers";

//App
import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";
import RequestAccount from "../../Components/RequestAccount/RequestAccount";
import { clear } from "console";

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
    let isMounted =true

    checkAccount();

    return function clear(){
      isMounted = false;
      ethereum.removeListener('accountsChanged', handleAccountsChanged);

    }
    function checkAccount() {
     
      // const accounts = await provider.send("eth_accounts", []);
      // console.log(accounts);
      // accounts.length > 0 && setShowAlert(false);
      ethereum.on("accountsChanged", );
    }

   const handleAccountsChanged=
  }, []);
  return (
    <div>
      {showAlert && <RequestAccount />} <SendProposal />
      {session == "getVotes" && <ProposalsBoard />}{" "}
    </div>
  );
}

export default Home;
