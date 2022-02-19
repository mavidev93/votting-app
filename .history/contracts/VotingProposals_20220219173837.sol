//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
//registerd voters 
 mapping (address => bool) public registerdVoters;
 address public owner;
   
 constructor(){
     owner = msg.sender;
 }   

//modifiers
modifier onlyOwner(){
    require(msg.sender==owner);
    _;
}
 //add voter 
function addVotter(address _votter) public onlyOwner {
     registerdVoters[_votter] = true;
 }

 //contain 
    


}