// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Certi{

    struct Certificate{
        string name;
        string course;
        string grade;
        string date;
    }
    event issued(string, uint, string);

    address admin;

    mapping(uint => Certificate) public certificates;

    constructor(){
        admin = msg.sender;
    }

    modifier onlyAdmin{
        require((msg.sender == admin),"Not authorised");
        _;
    }

    function issueCert(
                        uint _id, 
                        string memory _name,
                        string memory _course,
                        string memory _grade,
                        string memory _date
                      ) public onlyAdmin{

                        certificates[_id] = Certificate(_name, _course, _grade, _date);
                        emit issued(_course, _id, _grade);
                      }

}

