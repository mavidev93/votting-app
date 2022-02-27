//React
import { useEffect, useState } from "react";

//Third party
import { ethers } from "ethers";

//App
import VotingProposals from "../../artifacts/contracts/VotingProposals.sol/VotingProposals.json";

declare const window: any;

const votingProposalsAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function ProposalsBoard() {
  //local state
  const [proposals, setProposals] = useState([]);
  // const [blockNumber, setBlockNumber] = useState();
  console.log("rerender");

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    provider.on("block", (blockNum) => {
      console.log(blockNum);
      // setBlockNumber(blockNum);
      getProposals();

      //clear event
      return function cleanEvent() {
        provider.off("block");
      };
    });

    async function getProposals() {
      const contract = new ethers.Contract(
        votingProposalsAddress,
        VotingProposals.abi,
        provider
      );
      const proposalRes = await contract.getProposals();
      console.log(proposalRes);
      const proposalArr = proposalRes.map((proposal) => {
        const { proposedBy, vote, proposalText } = proposal;
        console.log(proposedBy);
        return { proposedBy, vote: vote.toString(), proposalText };
      });

      setProposals(proposalArr);
    }
  }, []);

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Proposal</th>
            <th>vote count</th>
            <th>vote!</th>
          </tr>
        </thead>
        <tbody>
          <tr className="d">
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ullam molestiae temporibus dolorem. Eius eaque sunt, dolor
              explicabo exer
            </td>
            <td>3</td>
            <td>
              <button>Vote</button>
            </td>
          </tr>
          <tr>
            {proposals?.map((p) => (
              <td key={p.proposedBy}>p.proposalText</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProposalsBoard;
