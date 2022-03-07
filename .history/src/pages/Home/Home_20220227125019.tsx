
import { ethers } from "ethers";

//App
import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";

import {ses}

function Home() {
  return (
    <div>
      <SendProposal />
      <ProposalsBoard />
    </div>
  );
}

export default Home;
