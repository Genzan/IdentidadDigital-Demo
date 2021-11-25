const Web3 = require("web3");
const ABICODE = require('../../identidad-digital-blockchain/contracts/abi/Check.json');
const ADDRESS = "0x77E43942E15060ae19C843714d339598e92ec2c3";
const PROVIDER = "HTTP://127.0.0.1:7545";

const USER_ADDRESS = "";
const USER_KEY = "";

const web3 = new Web3(
    new Web3.providers.HttpProvider(PROVIDER)
);
const contract = new web3.eth.Contract(ABICODE,ADDRESS);

class API_Check {

    fileUpload = async(file) => {
        console.log("<fileUpload>");
        let result = false;
        let encodedABI = contract.methods.fileUpload(file).encodeABI();
        let signedTx = await web3.eth.accounts.signTransaction(
            {
              data: encodedABI,
              from: USER_ADDRESS,
              gas: 2000000,
              to: ADDRESS,
            },
            USER_KEY,
            false,
        );
        let response = await web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', response =>{
            result = true;
        }).catch((err) => {
            console.error("ERR",err);
        });
        console.log("</fileUpload>");
        return result;
    };

}

module.exports = API_Check;