//App
import ProposalsBoard from "../../Components/ProposalsBoard/ProposalsBoard";
import SendProposal from "../../Components/SendProposal/SendProposal";

function Home() {
  return (
    <div>
      <SendProposal />
      <ProposalsBoard />
    </div>
  );
}

export default Home;
