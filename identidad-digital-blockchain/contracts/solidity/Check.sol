// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Check {
  //State Variables
  address private contractOwner;
  bool internal fileNotification = false;
  string[] internal fileList;

  constructor() public{
    contractOwner = msg.sender;
  }

  function fileUploaded(string memory _file) external{
    fileNotification = true;
    fileList.push(_file);
  }

  function checkUploads() public view returns(bool){
    return fileNotification;
  }

  function getUploads() external returns(string[] memory){
    fileNotification = false;
    return fileList;
  }

}