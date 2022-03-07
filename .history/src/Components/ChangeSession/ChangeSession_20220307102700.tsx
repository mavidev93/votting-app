//React
import { useState, useEffect } from "react";

//third party
import { ethers } from "ethers";

//App
import VotingProposals from "../../artifacts/contracts/VotingProposals.sol/VotingProposals.json";
import { useSession } from "../../Context/SessionContext";

import { sessionsArr } from "./../../staticData";
//type
declare const window: any;

//contract address
const votingProposalsAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function ChangeSession() {
  //local state
  const [inputSession, setInputSession] = useState(sessionsArr[0]);

  //event handlers
  const handleSubmitSession = async (event) => {
    event.preventDefault();

    console.log(inputSession);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      votingProposalsAddress,
      VotingProposals.abi,
      signer
    );

    if (inputSession) {
      const recept = await contract.changeSession(inputSession);
      console.log(recept);
    }
  };

  const handleSelectChange = (event) => {
    setInputSession(event.target.value);
  };

  return (
    <div className="my-4">
      <div className=" w-80 md:w-90 lg:w-90 mx-auto">
        <h2 className="text-center mt-3 font-bold font-header">
          Manage Session
        </h2>
        <form
          onSubmit={handleSubmitSession}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Ethereum address
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={inputSession}
              onChange={handleSelectChange}
            >
              {sessionsArr.map((s, i) => (
                <option key={`opsion-${i}`}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangeSession;
