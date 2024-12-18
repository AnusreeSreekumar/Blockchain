require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "localhost",
  networks: {   //specify the what all networks we are deploying the contract
    localhost:{ // this is just  a name which can be anything. we can give another name as well
      url:"http://127.0.0.1:8545/" // thru this url HardHat will contact a node in the Blockchain
    },
    // sepolia:{
    //   url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
    //   accounts:[process.env.PRIVATE_KEY]
    // }
  }
};
