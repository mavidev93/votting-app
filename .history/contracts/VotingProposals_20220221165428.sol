//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
//registerd voters 
 address public owner;

 uint internal proposalId;

struct  Proposal{
    uint vote;
    string text;

}

struct user{
    address userAddress;
    bool isVotted;
    bool isProposed;
    bool isRegistered;

}


 mapping (address => bool) public registerdVoters;
 mapping (address => string) public proposals;
   
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

function sendProposal(address _voter,string memory _proposal) public {
    // cheeke registeration
    if(contains(_voter)){
        proposals[_voter] = _proposal;
    }
}


 //contain 
 function contains(address _voter) public view returns  (bool){
     return registerdVoters[_voter];
 }   


}