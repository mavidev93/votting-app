//React
import { useEffect,useState } from 'react';

//Third party
import {ethers} from 'ethers'


declare const window: any;

const votingProposalsAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


function ProposalsBoard() {
//local state


//effects
useEffect(()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract()
},[])

  return (
    <div>
      <table className="table-auto">
        <thead>
            <tr>
          <th>Proposal</th>
          <th>vote count</th>
          <th>vote!</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </div>
  );
}
