//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract VotingProposals{
//registerd voters 
 address[] public registerdVoters;
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
 
function(address _votter)  onlyOwner {
     registerdVoters.push(_votter);
 }

}