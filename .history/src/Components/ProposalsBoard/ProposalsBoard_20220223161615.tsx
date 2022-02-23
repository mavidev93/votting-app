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
  const [proposals, setProposals] = useState();
  const [blockNumber, setBlockNumber] = useState();
  const [testNum, setTestNum] = useState(0);
  console.log("rerender");
  //effects
  useEffect(() => {
    async function getProposals() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        votingProposalsAddress,
        VotingProposals.abi,
        provider
      );
      const propRes = await contract.getProposals();
      console.log(propRes);
    }
    getProposals();
  }, []);

  useEffect(() => {
    console.log("from event effect");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const contract = new ethers.Contract(
    //   votingProposalsAddress,
    //   VotingProposals.abi,
    //   provider
    // );
    provider.on("block", (blockNumber) => {
      setTestNum(testNum + 1);
      console.log(`block number is ${blockNumber}`);

      //clear event
      return       

    });
  }, []);
  

  console.log(testNum);
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
        <tbody></tbody>
      </table>
    </div>
  );
}

export default ProposalsBoard;
