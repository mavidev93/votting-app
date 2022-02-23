import { useState } from "react";

//Third Party
import { ethers } from "ethers";

//App
import VotingProposals from '../../artifacts/contracts/VotingProposals.sol/VotingProposals.json'

declare const window: any;

const votingProposalsAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function SendProposal() {
  //localstate
  const [proposalVal, setProposalVal] = useState("");

  //Event Lisetners
  const handleSend = async (event) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", await signer.getAddress());

    const contract = new ethers.Contract(votingProposalsAddress,VotingProposals.abi,signer)

    contract.sendProposal(signer.address)
  };

  const handleProposalChange = (event) => {
    setProposalVal(event.target.value);
  };

  return (
    <div className="w-64 md:w-64 lg:w-96 mx-auto">
      <form
        onSubmit={handleSend}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block capitalize text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            please share your proposal with us
          </label>
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Your message"
            value={proposalVal}
            onChange={handleProposalChange}
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            send your proposal
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendProposal;
