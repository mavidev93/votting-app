//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
//registerd voters 
 mapping (address => bool) public registerdVoters;
 address public owner;
   
 constructor(){
     owner = msg.sender;
     console.log("owner is:",owner);
 }   

//modifiers
modifier onlyOwner(){
    require(msg.sender==owner);
    _;
}

 //register voter 
function registerVoter(address _voter) public onlyOwner {
    if(! contains(_voter)){
     registerdVoters[_voter] = true;
    }
 }

function sendProposal(address _votter,string memory _proposal) public {
    // cheeke registeration
}


 //contain 
 function contains(address _voter) public view returns  (bool){
     return registerdVoters[_voter];
 }   


}