// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

import "./Lottery.sol";

contract Factory{
    Lottery[] lotteries;
    function createLottery(string memory _pn, uint _duration) public payable{
        Lottery newLottery=(new Lottery){value:msg.value}({pn: _pn, duration:_duration});
        lotteries.push(newLottery);
    }
    function getLotteries() public view returns(Lottery[] memory){
        return lotteries;
    }
}