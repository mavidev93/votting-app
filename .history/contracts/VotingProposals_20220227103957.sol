//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
    // events
    //app sessions
    //--register users
    //--get Proposals
    // --show Proposals and get vote
    // -- show results

event ProposalsChange();
event SessionChange(string _session);

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
string public session;
string [5] private  sessionsArr = ["registerUsers", "sendProposals","getVotes",""]

 constructor(){
     owner = msg.sender;
     
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

//OnLy owner
function registerUser(address _user) public onlyOwner {
    if(! contains(_user)){
     registerdVoters[_user] = true;
     userByAddress[_user] =  User({userAddress:address( _user),isVoted:false,
     isProposed:false,
     isRegistered:true 
      }) ;
    }
 }

function changeSession(string memory _session) public onlyOwner{
session = _session;
emit SessionChange(session);
}


//--

function sendProposal(address _user,string memory _proposal) public {
    // cheeke registeration
    if(contains(_user) && !userByAddress[_user].isProposed){
    // userByAddress[_user].proposal = Proposal({proposedBy:_user,vote:0, text:_proposal});
    Proposal memory userProposal = Proposal({proposedBy:_user,vote:0, text:_proposal});
    proposalByUser[_user] = userProposal;
    userByAddress[_user].isProposed = true;
    proposedUsers.push(_user);
    emit ProposalsChange();    

    }
    
    else if(!contains(_user)){
        revert("please register first");
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
   
    return proposedUsers.length;
}

function retriveUser(address _user) public view returns( User memory){
    return userByAddress[_user];
}

function  vote(address _user, address _voteFor) public onlyRegisteredUser(_user) {
    require(userByAddress[_user].isVoted ==false,"you already voted!");
         proposalByUser[_voteFor].vote++;
        userByAddress[_user].isVoted = true;
        emit ProposalsChange();
}

 //contain 
 function contains(address _user) public view returns  (bool){
     return registerdVoters[_user];
 }   


}