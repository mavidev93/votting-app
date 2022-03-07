//React
import { useState, useEffect } from "react";

//third party
import { ethers } from "ethers";

//App
import VotingProposals from "../../artifacts/contracts/VotingProposals.sol/VotingProposals.json";
import {sessionsArr}
import { sessionsArr } from './../../staticData';
//type
declare const window: any;

//contract address
const votingProposalsAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function ChangeSession() {
  //local state
  const [session, setSession] = useState();



  //event handlers
  const handleSubmitSession = async (event) => {
    event.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      votingProposalsAddress,
      VotingProposals.abi,
      signer
    );

    if (session) {
      const recept = await contract.changeSession(session);
      console.log(recept);
    }
  };

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSession(event.target.value);
  };
  //Effects
  // get current session
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      votingProposalsAddress,
      VotingProposals.abi,
      provider
    );

    //if session is null getSession
    !session && getSession();

    //set event listener
    contract.on("SessionChange", (session) => {
      console.log(session);
      setSession(session);
    });

    async function getSession() {
      const sess = await contract.session();
      console.log(sess);
      setSession(sess);
    }

    //clear event listener
    return function clear() {
      contract.removeAllListeners("SessionChange");
    };
  }, []);
  return (
    <div>
      <div className="w-64 md:w-64 lg:w-96 mx-auto">
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
              value={session}
              onChange={handleSelectChange}
            >
              {sessionsArr.map((s, i) => (
                <option key={`Sopsion-${i}`}>{s}</option>
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
