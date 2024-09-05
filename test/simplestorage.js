const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage Contract", function () {
    let SimpleStorage, simpleStorage;
    let owner;
    beforeEach(async () => {
        SimpleStorage = await ethers.getContractFactory('SimpleStorage');
        [owner] = await ethers.getSigners()
        simpleStorage = await SimpleStorage.deploy()
    })

    it('gives default favourite  number as 0', async function () {
        const favNum = await simpleStorage.getVal()
        expect(favNum).to.equal(0)
    })

    it('give the new favNumber which has been set as 5', async function () {
        await simpleStorage.store(5)
        const favNum = await simpleStorage.getVal()
        expect(favNum).to.equal(5)
    })

    it('Store the Name and the Fav number correctly', async function () {
        await simpleStorage.addPerson("Riddle", 23)
        const person = await simpleStorage.listOfPeople(0)
        expect(person.name).to.equal("Riddle")
        expect(person.favNum).to.equal(23)
    })
})



