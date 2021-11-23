const truffleAssert = require('truffle-assertions');
const Check = artifacts.require("Check");
const Checker = artifacts.require("Checker");
const ICheck = artifacts.require("ICheck");

contract('Prueba de Oraculo', (accounts) => {
  let instanceCheck;
  before('setup contract for all Tests', async function () {
    instanceCheck = await Check.deployed();
  });
  it('Validar que no hay Uploads nuevos', async () => {
    const res = await instanceCheck.checkUploads();
    assert.equal(res, false, "No hay Uploads nuevos");
  });
});