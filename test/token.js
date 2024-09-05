
const { expect } = require("chai")
const { ethers } = require("hardhat")


describe('Token Contract', function () {
    it('Deployment should assign the total supply of the token to the owner', async function () {
        const [owner] = await ethers.getSigners()
        console.log("Owner Object ", owner)
        const hardhatToken = await ethers.deployContract("Token")
        console.log("hardhatToken", hardhatToken)

        const ownerBalance = await hardhatToken.balance(owner.address)
        console.log("ownerBalance", ownerBalance)

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance)



    })
})