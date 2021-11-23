// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ICheck.sol";

contract Checker {
  //State Variables
  address private contractOwner;
  address private checkerAddress;

  constructor(address _checkerAddress) public {
    contractOwner = msg.sender;
    checkerAddress = _checkerAddress;
  }

  function validateNewUploads() public returns(bool){
    return ICheck(checkerAddress).checkUploads();
  }

}