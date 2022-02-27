//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
 event Vote (address _user, address _voteFor,uint _VoteCount );   

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
    // Proposal proposal;
}


 mapping (address => bool) public registerdVoters;
 mapping (address => User) public userByAddress;

mapping(address =>Proposal) public proposalByUser;
Proposal [] public proposals;
address [] public proposedUsers;

 constructor(){
     owner = msg.sender;
     proposalId=0;
     console.log("owner is:",owner);
 }   

//modifiers
modifier onlyOwner(){
    require(msg.sender==owner,"only crater of contract ");
    _;
}

modifier onlyRegisteredUser(address _user){
    require(contains(_user),"please reagister first");
    _;
}

function registerUser(address _user) public onlyOwner {
    if(! contains(_user)){
     registerdVoters[_user] = true;
     userByAddress[_user] =  User({userAddress:address( _user),isVoted:false,
     isProposed:false,
     isRegistered:true 
      }) ;
    }
 }


function sendProposal(address _user,string memory _proposal) public {
    // cheeke registeration
    if(contains(_user) && !userByAddress[_user].isProposed){
    // userByAddress[_user].proposal = Proposal({proposedBy:_user,vote:0, text:_proposal});
    Proposal memory userProposal = Proposal({proposedBy:_user,vote:0, text:_proposal});
    proposalByUser[_user] = userProposal;
    userByAddress[_user].isProposed = true;
    proposedUsers.push(_user);
    console.log(_user, " proposal is: ", _proposal);  
    

    }
    
    else if(!contains(_user)){
        revert("please register firs");
    }

    else  if(userByAddress[_user].isProposed){
        revert("already proposed!");
    }
}

function getProposal(uint index) public view returns(Proposal memory){

  return proposalByUser[proposedUsers[index]];
 
}

//every user can sand one proposal 
function getProposalsLength()public view  returns(uint){
    console.log();
    return proposedUsers.length;
}

function retriveUser(address _user) public view returns( User memory){
    return userByAddress[_user];
}

function  vote(address _user, address _voteFor) public onlyRegisteredUser(_user) {
    require(userByAddress[_user].isVoted ==false,"you already voted!");
         proposalByUser[_voteFor].vote++;
        userByAddress[_user].isVoted = true;
        emit Vote(_user, _voteFor, proposalByUser[_voteFor].vote);
}

 //contain 
 function contains(address _user) public view returns  (bool){
     return registerdVoters[_user];
 }   


}