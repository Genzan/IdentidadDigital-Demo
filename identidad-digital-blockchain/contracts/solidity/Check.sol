// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Check {

  //State Variables
  address private contractOwner;
  bool internal fileNotification = false;
  string[] internal fileList;

  //Events
  event fileUploaded();
  event gotFiles(string[] _fileList);

  constructor() public{
    contractOwner = msg.sender;
  }

  function fileUpload(string memory _file) external{
    fileNotification = true;
    fileList.push(_file);
    emit fileUploaded();
  }

  function checkUploads() external view returns(bool){
    return fileNotification;
  }

  function getUploads() external{
    fileNotification = false;
    string[] memory temporal = fileList;
    string[] memory empty;
    fileList = empty;
    emit gotFiles(temporal);
  }

}