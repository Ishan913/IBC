// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract Lottery{

    string public potName;
    uint public closingTime;
    uint public minStake;
    uint public totalStake;
    uint public n;
    address payable[] public participants;
    address public owner;
    bool active;

    constructor(string memory pn, uint duration) payable {
        owner=msg.sender;
        n=0;
        totalStake=0;
        minStake=1 ether;
        potName=pn;
        closingTime=block.timestamp+duration;
        active=true;
    }

    receive() external payable{
        require(msg.value >= minStake, "not enough stake");
        require(msg.sender != owner, "owner can't send");
        require(active == true, "lottery not active");
        totalStake=totalStake+msg.value;
        participants.push(payable(msg.sender));
        n++;
    }

    function draw() external payable {
        require(block.timestamp > closingTime, "too early");
        require(participants.length >= 2, "not enough participants");
        require(active == true, "lottery not active");
        address payable winner;
        winner=participants[uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, participants.length)))%participants.length];
        uint prize;
        prize=(address(this).balance * 90) / 100;
        winner.transfer(prize);
        payable(owner).transfer((address(this).balance * 10) / 100);
        participants=new address payable[](0);
        active=false;
    }
}