// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

contract simpleStorage {
    uint256 public myfavNum;

    function store(uint256 _favNum) public virtual {
        myfavNum = _favNum;
    }

    struct Person{
        uint256 favNum;
        string name;
    }  

    //dynamic array   
    Person[] public listOfPeople;

    mapping(string=>uint256) public nameToFavNum;

    //view ,pure  : uisng these function wont cost any transaction as they only read value while if we modify a value it will cost/make a transaction
    function getVal() public view returns (uint256) {
        return myfavNum;
    }

    // function get_A_Val() public pure returns(uint){
    //     return 8;
    // }

//    calldata (temp variable that cannot be modifed),memory,storage

    function addPerson(string memory _name, uint256 _favNumber) public {
        listOfPeople.push( Person({name:_name,favNum:_favNumber}) );
        nameToFavNum[_name]=_favNumber;
    }
}