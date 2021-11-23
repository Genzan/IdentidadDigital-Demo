// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

interface ICheck {
    function fileUploaded(string memory _file) external;
    function checkUploads() external returns(bool);
    function getUploads() external returns(string[] memory);
}