// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/**
 * @dev This is an auxiliary contract meant to be assigned as the admin of a {TransparentUpgradeableProxy}. For an
 * explanation of why you would want to use this see the documentation for {TransparentUpgradeableProxy}.
 */
contract ZeroHero is Initializable {
    
    
    uint256 private age;
    uint256 private weight;
    string constant name = "Moon";


    //初始化函数

    function initialize(uint256 _initAge) public initializer{
        age = _initAge;
    }

    event ValueChanged(uint256 newAge);

    //setAge
    function setAge(uint256 newAge) public {
        age = newAge;
        emit ValueChanged(newAge);
    }

    function setWeight(uint256 newWeight) public {
        weight = newWeight;
        emit ValueChanged(newWeight);
    }
    //readAge
    function readAge() public view returns (uint256) {
        return age+1;
    }
     //readALL
    function readAll() public view returns (string memory name,uint256 age,uint256 weight) {
        return (name,age,weight);
    }

}