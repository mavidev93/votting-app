//React
import { useContext } from "react";

//Third Party
import { ethers } from "ethers";

//App
import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";
import SessionContext from "../../Context/SessionContext";

function Home() {
  return (
    <SessionContext.Consumer>
  
        <div>
          <SendProposal />
          <p>{value}</p>
          <ProposalsBoard />
        </div>
    </SessionContext.Consumer>
  );
}

export default Home;
