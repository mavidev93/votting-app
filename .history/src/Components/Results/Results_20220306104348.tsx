//React
import { useEffect } from 'react'

//Third party
import {ethers} from 'ethers'



function Results(){

    useEffect(()=>{


        async function getResults() {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            
        }

    },[])

    return <div className="shadow-md">
        <h2 className="uppercase"> Results</h2>
    </div>
}

export default Results