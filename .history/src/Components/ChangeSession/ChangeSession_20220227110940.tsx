//
import { useEffect } from "react";

function ChangeSession(){

    //static data
    const sessionsArr = ["registerUsers", "sendProposals","getVotes","showResults"];


    //events 
    const handleSubmitSession = ()=>{
        
    }

    useEffect
    return (
    <div>
    <div className="w-64 md:w-64 lg:w-96 mx-auto">
      <h2 className="text-center mt-3 font-bold font-header">
        Register User
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
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
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
    )
}