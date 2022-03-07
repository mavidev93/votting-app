//React
import { useEffect } from 'react'

//Third party
import {ethers} from 'ethers'

//App
import VotingProposals from '../../artifacts/contracts/VotingProposals.sol/VotingProposals.json'

declare const window:any;

//contract address
const votingProposalsAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



function Results(){

    useEffect(()=>{


        async function getResults() {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send('eth_accounts',[]);
            const signer = provider.getSigner()

            const contract = new ethers.Contract()
        }

    },[])

    return <div className="shadow-md">
        <h2 className="uppercase"> Results</h2>
    </div>
}

export default Results