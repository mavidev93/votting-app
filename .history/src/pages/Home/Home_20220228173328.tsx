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
  
  
  useEffect(()=>{
    
    async function isConnectedAccount() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let currentAccount = null;
      const accounts = await provider.send("eth_accounts", []);
      
    }
  },[])
  //context
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
