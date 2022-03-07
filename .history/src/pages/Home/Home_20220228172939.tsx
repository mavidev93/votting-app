//React
mport { useEffect } from "react";

//App
import { useSession } from "../../Context/SessionContext";
import { requestAccounts } from "../../helpers/metamaskHelpers";
//Third Party
import { ethers } from "ethers";

//App
import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";
import RequestAccount from "../../Components/RequestAccount/RequestAccount";

function Home() {
  //context
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  let currentAccount = null;
  const accounts = await provider.send("eth_accounts", []);
  useEffect;
  const { session } = useSession();
  console.log("session is:", session);
  return (
    <div>
      <RequestAccount />
      <SendProposal />
      {session == "getVotes" && <ProposalsBoard />}{" "}
    </div>
  );
}

export default Home;
