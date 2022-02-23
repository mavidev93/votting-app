//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
//registerd voters 
 mapping (address => bool) public registerdVoters;
 address public owner;
   
 constructor(){
     owner = msg.sender;
     console.log('owner is:',owner);
 }   

//modifiers
modifier onlyOwner(){
    require(msg.sender==owner);
    _;
}
 //add voter 
function addVotter(address _votter) public onlyOwner {
    if(! contains(_votter)){
     registerdVoters[_votter] = true;
    }
 }

 //contain 
 function contains(address _user) public view returns  (bool){
     return registerdVoters[_user];
 }   


}