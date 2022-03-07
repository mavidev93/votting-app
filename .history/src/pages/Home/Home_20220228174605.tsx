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

declare const window: any;

function Home() {
  //localState
  const [showAlert, setShowAlert] = useState(true);

  //context
  const { session } = useSession();
  console.log("session is:", session);

  //Effects
  useEffect(() => {
    checkAccount();
    async function checkAccount() {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      // const accounts = await provider.send("eth_accounts", []);
      // console.log(accounts);
      // accounts.length > 0 && setShowAlert(false);
      ethereum.on('accountsChanged', (accounts) => {
        if(accounts.length>0){
          set
        }
      });
    }
  }, []);
  return (
    <div>
      {showAlert && <RequestAccount />} <SendProposal />
      {session == "getVotes" && <ProposalsBoard />}{" "}
    </div>
  );
}

export default Home;
