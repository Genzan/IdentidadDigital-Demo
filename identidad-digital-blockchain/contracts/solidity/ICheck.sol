// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

interface ICheck {
    event fileUploaded();
    event gotFiles(string[] _fileList);
    
    function fileUpload(string memory _file) external;
    function checkUploads() external view returns(bool);
    function getUploads() external;
}