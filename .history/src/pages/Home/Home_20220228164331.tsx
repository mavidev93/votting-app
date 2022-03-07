//React

//App
import { useSession } from "../../Context/SessionContext";
import {Reques}
//Third Party
import { ethers } from "ethers";

//App
import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";

function Home() {
  //context
  const { session } = useSession();
  console.log("session is:", session);
  return (
    <div>
      <SendProposal />
      {session == "getVotes" && <ProposalsBoard />}{" "}
    </div>
  );
}

export default Home;
