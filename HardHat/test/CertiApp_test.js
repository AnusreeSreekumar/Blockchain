const { loadFixture } = require('@nomicfoundation/hardhat-toolbox/network-helpers');
const {expect} = require('chai');
const {ethers} = require('hardhat')


describe('Cert', function(){

    async function deployContract(){
        
        const [admin, other] = await ethers.getSigners(); 
        const Cert = await ethers.getContractFactory('Certi');
        const contractAddress = await Cert.deploy();

        return{admin,other, contractAddress}
    }

    it("should be deployed only by admin", async function(){
        const {admin, contractAddress} = await loadFixture(deployContract);
        // console.log(admin, contractAddress);
        expect(contractAddress.deploymentTransaction().from).to.equals(admin.address)
    })

    it("Able to issue and read certificate", async function(){
        const {admin, contractAddress} = await loadFixture(deployContract);
        await contractAddress.issueCert(1, "Anu", "CBA", "A", "13/12/2024")
        const certificate = await contractAddress.certificates(1)
        // console.log(certificate);
        expect(certificate[0]).to.equals("Anu");
        expect(certificate[1]).to.equals("CBA");
        expect(certificate[2]).to.equals("A");
        expect(certificate[3]).to.equals("13/12/2024");
    })

    it("Only admin can issue the certificate", async function () {
        const {other, contractAddress} = await loadFixture(deployContract);
        await expect(contractAddress.connect(other).issueCert(2, "Sheeba", "CBA", "B", "13/12/2024"))
        .to.be.revertedWith("Not authorised");
    })
})