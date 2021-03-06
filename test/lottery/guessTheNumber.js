const Web3 = require("web3");
const ethers = require("ethers")
const { BigNumber, utils } = require("ethers")
const BN = require('bn.js');

const provider = new ethers.providers.WebSocketProvider(process.env.ALCHEMY_API_ROPSTEN_KEY)

const signer = new ethers.Wallet(process.env.WALLET_PRIVATE_KEY);
const account = signer.connect(provider);
const contractAddress = "0x7D229447Ef2C5E61A8B3D4E8Ccc162474cd20B6a"


const contractInst = new ethers.Contract(contractAddress, ["function guess(uint8 n) public payable"], account);

contract ("guess the number", async () =>{
    let accounts;
    before(async () => {
        accounts = await web3.eth.getAccounts()
    })
    it("should print contract", async () => {
        console.log(contractInst)
    })
    it("should make transaction", async () => {
        let contractBal = await web3.eth.getBalance(contractInst.address)
        console.log({
            contractBal: contractBal.toString()
        })
        let tx = await contractInst.guess(42, { value:  1e18.toString() });
        console.log(tx)
        })
})



