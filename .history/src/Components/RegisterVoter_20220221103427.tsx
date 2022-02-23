//react
import { useState } from "react";
//Third Party
import { ethers } from "ethers";

function RegisterVoter() {
  //local state
  const [addressVal, setAddressVal] = useState("");

  //events
  const handleRegister = (event) => {
    console.log(event);
    event.preventDefault();
    if(ethers.utils.isAddress(addressVal)){
     const provider = new ethers.providers.Web3Provider(window.ethereum)
    }
  };

  const handleAddress = (event) => {
    setAddressVal(event.target.value);
  };

  return (
    <div>
      <div className="w-40 md:w-64 lg:w-96 mx-auto">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Ethereum address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="ETH Address"
              value={addressVal}
              onChange={handleAddress}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterVoter;
