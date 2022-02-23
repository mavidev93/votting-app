//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
//registerd voters 
 address public owner;

 uint internal proposalId;

struct  Proposal{
    address proposedBy;
    uint vote;
    string text;

}

struct User{
    address userAddress;
    bool isVoted;
    bool isProposed;
    bool isRegistered;
    Proposal proposal;
}


 mapping (address => bool) public registerdVoters;
//  mapping (address => string) public proposals;
 mapping (address => User) public userByAddress;

Proposal [] public proposals;
   
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

function registerUser(address _user) public onlyOwner {
    if(! contains(_user)){
     registerdVoters[_user] = true;
     userByAddress[_user] =  User({userAddress:address( _user),isVoted:false,
     isProposed:false,
     isRegistered:true ,
      proposal:Proposal( {proposedBy:_user,vote:0, text:""})
      }) ;
    }
 }


function sendProposal(address _user,string memory _proposal) public {
    // cheeke registeration
    if(contains(_user) && !userByAddress[_user].isProposed){
userByAddress[_user].proposal = Proposal({proposedBy:_user,vote:0, text:_proposal});
userByAddress[_user].isProposed = true;
      console.log()  

        
    }
}

function getProposals() public view returns(Proposal[] memory){
    return proposals;
}

function retriveUser(address _user) public view returns( User memory){
    return userByAddress[_user];
}

 //contain 
 function contains(address _voter) public view returns  (bool){
     return registerdVoters[_voter];
 }   


}