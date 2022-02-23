//react
im
//Third Party
import {ethers} from 'ethers'



function RegisterVoter() {

  //events
  const handleRegister= (event)=>{
    event.preventDefault()

  }
  return (
    <div>
      <div className="w-40 md:w-64 lg:w-96 mx-auto">
        <form 
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              
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