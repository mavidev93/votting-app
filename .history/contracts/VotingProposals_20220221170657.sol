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

struct User{
    address userAddress;
    bool isVoted;
    bool isProposed;
    bool isRegistered;
}


 mapping (address => bool) public registerdVoters;
 mapping (address => string) public proposals;
 mapping (address => User[]) public userByAddress;

   
 constructor(){
     owner = msg.sender;
     proposalId=0;
     console.log("owner is:",owner);
 }   

//modifiers
modifier onlyOwner(){
    require(msg.sender==owner);
    _;
}

 //register voter 
function registerUser(address _voter) public onlyOwner {
    if(! contains(_voter)){
     registerdVoters[_voter] = true;
     userByAddress[_voter]= User({userAddress:_voter,isVoted:false,isProposed});
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