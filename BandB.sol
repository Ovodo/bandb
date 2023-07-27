// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract BandB is ERC20Burnable {
    uint256 public constant MAX_SUPPLY = 21 * 10**6 * 10**18; // 21 million tokens with 18 decimal places

    constructor() ERC20("BandB", "INDEX") {
        _mint(msg.sender, MAX_SUPPLY);
    }

    /**
     * @custom:dev-run-script deployAndMint
     */
    function deployAndMint() external {
        // This function will be executed when you start the development environment
        // It will deploy the contract and mint the initial supply
    }
}
