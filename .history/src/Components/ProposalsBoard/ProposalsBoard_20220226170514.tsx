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

  //handlers
  const handleVote = async (proposedBy) => {
    console.log(proposedBy);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(
      votingProposalsAddress,
      VotingProposals.abi,
      signer
    );

    const recipe = await contract.vote(signerAddress, proposedBy);
    console.log(recipe);
  };
  //Effects
  useEffect(() => {
    let isMounted = true;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      votingProposalsAddress,
      VotingProposals.abi,
      provider
    );

    contract.on("Vote", (user, to, voteCount) => {
      console.log("vote called");
      console.log(user, to, voteCount.toString());
    });

    provider.on("block", (blockNum) => {
      // console.log(blockNum);
      // setBlockNumber(blockNum);
      console.log('onbl')
      getProposals();

      //clear event
      return function clear() {
        provider.off("");

        isMounted = false;
      };
    });

    async function getProposals() {
      const contract = new ethers.Contract(
        votingProposalsAddress,
        VotingProposals.abi,
        provider
      );

      const proposalsLength = (await contract.getProposalsLength()).toNumber();
      console.log(proposalsLength);
      //create an array with length of proposals and map throgth it
      const proposalsArr = await Promise.all(
        Array.apply(null, Array(proposalsLength)).map(async (_, i) => {
          const proposal = await contract.getProposal([i]);
          const { proposedBy, vote, text } = proposal;

          return { proposedBy, vote: vote.toNumber(), text };
        })
      );
      console.log("ou know where i am");
      console.log(proposalsArr);
      isMounted && setProposals(proposalsArr);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <table className="table-auto border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className="border border-slate-300">Proposal</th>
            <th className="border border-slate-300  px-2 capitalize">
              vote count
            </th>
            <th className="border border-slate-300 capitalize">vote!</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="max-w-lg		border border-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ullam molestiae temporibus dolorem. Eius eaque sunt, dolor
              explicabo exer
            </td>
            <td className="text-center mx-2 border border-slate-300">3</td>
            <td className="border border-slate-300">
              <button className="bg-teal-400 hover:bg-teal-600 text-white  py-1 px-3 rounded mx-2 ">
                Vote
              </button>
            </td>
          </tr> */}

          {proposals?.map((p, i) => (
            <tr className=" p-2" key={i}>
              <td className="max-w-lg		border border-slate-300 px-2">{p.text}</td>
              <td className="text-center mx-2 border border-slate-300">
                {p.vote}
              </td>
              <td className="border border-slate-300">
                <button
                  onClick={() => handleVote(p.proposedBy)}
                  className="bg-teal-400 hover:bg-teal-600 text-white  py-1 px-3 rounded m-1 "
                >
                  Vote
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProposalsBoard;
