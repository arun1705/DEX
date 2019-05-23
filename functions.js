//common
const BncClient = require('@binance-chain/javascript-sdk')
const api = 'https://testnet-dex.binance.org/';


const client = new BncClient(api)
let privKey="0a4b6602f94a497893cff321adea9af4233b4577c6867ecc397fb1a5f6f68396"
client.setPrivateKey(privKey);
client.initChain()


exports.createAccount = async () => {

    var res = await client.createAccount()

    return res;

}

exports.getBalance = async (address) => {

    var res1 = await client.getBalance(address)
    console.log(res1)
    return res1;

}

exports.placeOrder = async (address, symbol, side, price, quantity, sequence, timeinforce) => {

    var res2 = await client.placeOrder(address, symbol, side, price, quantity, sequence, timeinforce)
    console.log(res2)
    return res2;

}

exports.issueToken = async (address, tokenName, symbol, totalSupply) => {

    var res3 = await client.tokens.issue(address, tokenName, symbol, totalSupply)
    console.log(res3)
    return res3;

}
