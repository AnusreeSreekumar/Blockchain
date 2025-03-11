Starting a HardHat project:
***************************

Step 1: Open Visual Studio in new folder => Open terminal.

Step 2: npm init 
Step 3: npm i -D hardhat
Step 4: npx hardhat init
After this below steps will be populated automatically and keep it such
✔ What do you want to do? · Create a JavaScript project
✔ Hardhat project root: · /home/anusree/Documents/Git Repos/HARDHAT
✔ Do you want to add a .gitignore? (Y/n) · y
✔ Help us improve Hardhat with anonymous crash reports & basic usage data? (Y/n) · y
✔ Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? (Y/n) · y

Step 5: Write the contract in contract folder
Step 6: npx hardhat compile
Step 7: for deploying the contract in blockchain network

npx hardhat ignition deploy "path" --network 

path: path of the .js file in the ignition folder (ignition/modules/CertiApp.js).
networkname: name of the network given in hardhat.config.js file(localhost).

Supporting libraries:
*********************
npm install dotenv (to store values of important fields)

npm i ethers => for installing ethers in HardHat. For details refer Readme file in HardHat repo.

npx hardhat test => command to run test file in 'test' folder.
