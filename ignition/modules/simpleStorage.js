const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleStorageToken", (m) => {
  const token = m.contract("simpleStorage");

  return { token };
  
});