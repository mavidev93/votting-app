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
const handleVote=async ()=>{
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts",[])

  const signer = provider.getSigner()
  const signerAddress = await signer.getAddress()
  const contract = new ethers.Contract(votingProposalsAddress,VotingProposals.abi,signer);
  
  const recipe = contract.vote(signerAddress,)


}
  //Effects
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      votingProposalsAddress,
      VotingProposals.abi,
      provider
    );

    contract.on("Vote", (user, to, voteCount) => {
      console.log(user, to, voteCount);
    });

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
        const { proposedBy, vote, text } = proposal;
        console.log(text);
        return { proposedBy, vote: vote.toString(), text };
      });

      setProposals(proposalArr);
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

          {proposals?.map((p) => (
            <tr className=" p-2" key={p.proposedBy}>
              <td className="max-w-lg		border border-slate-300 px-2">{p.text}</td>
              <td className="text-center mx-2 border border-slate-300">
                {p.vote}
              </td>
              <td className="border border-slate-300">
                <button
                  onClick={()=>handleVote(p.proposedBy})}
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
