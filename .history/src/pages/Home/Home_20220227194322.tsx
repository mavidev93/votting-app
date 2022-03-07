//React

//App
import {useSession,SessionProvider} from '../../Context/SessionContext'

//Third Party
import { ethers } from "ethers";

//App
import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";
import SessionContext from "../../Context/SessionContext";

function Home() {

  //context
  const value = useContext(SessionContext)
  return (
    <SessionContext.Consumer>
  
        <div>
          <SendProposal />
          
          <ProposalsBoard />
        </div>
    </SessionContext.Consumer>
  );
}

export default Home;
