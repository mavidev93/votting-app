//React
import { useEffect,useState } from 'react';

//Third party
import {ethers} from 'ethers'

declare const window: any;


function ProposalsBoard() {
//local state


//effects
useEffect(()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
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
