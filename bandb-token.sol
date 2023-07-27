// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract INDEX is ERC20 {
    // Constructor sets the initial total supply and assigns it to the contract deployer
    constructor() ERC20("INDEX", "INDEX") {
        uint256 maxSupply = 21 * 10**6 * 10**18; // 21 million tokens with 18 decimal places
        _mint(msg.sender, maxSupply);
    }
}
