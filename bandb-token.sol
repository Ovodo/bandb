// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./CustomPausable.sol";

contract BandB is ERC20Burnable, AccessControl, CustomPausable {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    uint256 public constant MAX_SUPPLY = 21 * 10**6 * 10**18; // 21 million tokens with 18 decimal places

    constructor() ERC20("BandB", "INDEX") {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(PAUSER_ROLE, msg.sender);
        _mint(msg.sender, MAX_SUPPLY);
    }

    function pause() public {
        require(hasRole(PAUSER_ROLE, msg.sender), "Must have pauser role to pause");
        _pause();
    }

    function unpause() public {
        require(hasRole(PAUSER_ROLE, msg.sender), "Must have pauser role to unpause");
        _unpause();
    }
}
