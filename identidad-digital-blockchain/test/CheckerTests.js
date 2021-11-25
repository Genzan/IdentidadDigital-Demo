const truffleAssert = require('truffle-assertions');
const Check = artifacts.require("Check");
const Checker = artifacts.require("Checker");

contract('Prueba de Oraculo', (accounts) => {
  let instanceCheck;
  before('setup contract for all Tests', async function () {
    instanceCheck = await Check.deployed();
    instanceChecker = await Checker.deployed();
  });
  it('Validar que no hay Uploads nuevos', async () => {
    const res = await instanceCheck.checkUploads();
    assert.equal(res, false, "No hay Uploads nuevos");
  });
  it('Validar que no hay Uploads nuevos usando Checker', async () => {
    const res = await instanceChecker.validateNewUploads();
    assert.equal(res, false, "No hay Uploads nuevos");
  });
  it('Se carga un archivo', async () => {
    const tx  = await instanceCheck.fileUpload("HASH_IPFS");
    truffleAssert.eventEmitted(tx, 'fileUploaded', (ev) => {
      return true;
    }, 'ERR','El Evento no fue lanzado u obtuvo valores equivocados');
  });
  it('Validar que hay Uploads nuevos usando Checker', async () => {
    const res = await instanceChecker.validateNewUploads();
    assert.equal(res, true, "Hay Uploads nuevos");
  });
});