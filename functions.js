//common
const BncClient = require('@binance-chain/javascript-sdk')
const api = 'https://testnet-dex.binance.org/';


const client = new BncClient(api)
client.initChain()


exports.createAccount = async () => {

    var res = await client.createAccount()

    return res;

}

exports.getBalance = async (address) => {

    var res1 =await client.getAccount(address)
    console.log(res1)
    return res1;

}

exports.placeOrder = async (address, symbol, side, price, quantity,sequence) => {

    var res2 =await client.placeOrder(address, symbol, side, price, quantity,sequence)
    console.log(res2)
    return res2;

}
