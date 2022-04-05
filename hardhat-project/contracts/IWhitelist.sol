 // SPDX-License-Identifier: MIT
 pragma solidity >=0.4.22 <0.9.0;

 
 interface IWhitelist {
     function whitelistedAddresses(address) external view returns (bool);
 }