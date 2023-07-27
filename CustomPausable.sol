// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/Pausable.sol";

abstract contract CustomPausable is Pausable {
    // Empty override to avoid conflict with ERC20's _beforeTokenTransfer function
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override {}
}
