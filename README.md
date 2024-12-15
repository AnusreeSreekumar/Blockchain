# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
Notes in CertiApp_test.js
**************************

describe is a function from Mocha library to write a module with multiple tests.
Syntax is describe('name', 'callback function')

Ethers.js is a javascript library which help us to interact with the Blockchain(main function) from a javascript developed application. As we are using HardHat for TESTING, we directly start from here. This will simulate a node and get all open accounts.

In actual scenario, before deployment we compile the contract we created. As we are testing, this compiling should be done manually.

Also, we use getContractFactory() function in Ethers library to create an instance of our contract.

from Mocha library we use it() function to write individual tests
loadFixture is a function in HardHat that will run the setup for first time only and will fetch/return this state in other tests 

