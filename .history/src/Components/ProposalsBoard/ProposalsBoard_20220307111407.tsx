//React
import { useEffect, useState } from "react";

//Third party
import { ethers } from "ethers";

//App
import VotingProposals from "../../artifacts/contracts/VotingProposals.sol/VotingProposals.json";
import { useSession } from "../../Context/SessionContext";

declare const window: any;

//Contract address
const votingProposalsAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function ProposalsBoard() {
  //local state
  const [proposals, setProposals] = useState([]);

  //context
  const { session } = useSession();

  //handlers
  const handleVote = async (proposedBy) => {
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
    getProposals();

    contract.on("ProposalsChange", () => {
      getProposals();
    });

    async function getProposals() {
      const proposalsLength = (await contract.getProposalsLength()).toNumber();
      //create an array with length of proposals and map through it
      const proposalsArr = await Promise.all(
        Array.apply(null, Array(proposalsLength)).map(async (_, i: number) => {
          const proposal = await contract.getProposal(i);
          const { proposedBy, vote, text } = proposal;

          return { proposedBy, vote: vote.toNumber(), text };
        })
      );

      let maxVote = proposalsArr.reduce(function (
        prevProposal,
        currentProposal
      ) {
        return prevProposal.vote > currentProposal.vote
          ? prevProposal
          : currentProposal;
      }).vote;
      const proposalsComparedVote = proposalsArr.map((p) => {
        return { ...p, isHighVote: p.vote === maxVote };
      });

      
      isMounted && setProposals(proposalsComparedVote);
    }

    //clear event
    return function clear() {
      contract.removeAllListeners("ProposalsChange");
      isMounted = false;
    };
  }, []);

  //--
  return proposals.length > 0 ? (
    <div className="flex justify-center p-1 mt-7">
      <table className="table-auto border-collapse min-w-[50%] border border-slate-400">
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
          {proposals?.map((p, i) => (
            <tr
              className={` p-2  ${
                session === "showResults" && p.isHighVote
                  ? "font-bold bg-cyan-600 text-white		"
                  : ""
              }`}
              key={i}
            >
              <td className="max-w-lg		border border-slate-300 px-2">{p.text}</td>
              <td className="text-center mx-2 border border-slate-300">
                {p.vote}
              </td>
              <td className="border border-slate-300 text-center">
                <button
                  onClick={() => handleVote(p.proposedBy)}
                  className={`  ${
                    session === "showResults"
                      ? "bg-teal-400 text-white font-bold opacity-50 cursor-not-allowed"
                      : "bg-teal-400 hover:bg-teal-600 text-white "
                  }  py-1 px-3 my-1 rounded m-1 `}
                  disabled={session === "showResults"}
                >
                  Vote
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-center font-bold uppercase text-red-500">no proposal</p>
  );
}

export default ProposalsBoard;