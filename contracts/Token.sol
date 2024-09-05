// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.24;

contract Token {
    string public name = "HardHat Token";
    string public symbol = "HHT";
    uint public totalSupply = 10000;

    address public owner;
    mapping(address => uint) balances;

    constructor() {
        owner = msg.sender;
        balances[owner] = totalSupply;
    }

    function transfer(address to, uint amt) external {
        require(balances[msg.sender] > amt, "Not enough Balance");
        balances[msg.sender] -= amt;
        balances[to] += amt;
    }

    function balance(address account) external view returns (uint) {
        return balances[account];
    }
}
