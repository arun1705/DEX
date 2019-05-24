const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

const port = 3000
const fun = require('./functions')


app.get('/Account', async function (req, res) {
    var result = await fun.createAccount()
    res.send(result);
})

app.post('/Balance', async function (req, res) {
    var address = req.body.address;
    var result = await fun.getBalance(address)
    res.send(result);
})



app.post('/Token', async function (req, res) {
    var address = req.body.address;
    var symbol = req.body.symbol;
    var tokenName = req.body.tokenName;
    var totalSupply = req.body.totalSupply;
    var result = await fun.issueToken(address, tokenName, symbol, totalSupply)
    res.send(result);
})

app.post('/Order', async function (req, res) {
    var address = req.body.address;
    var symbol = req.body.symbol;
    var side = req.body.side;
    var price = req.body.price;
    var quantity = req.body.quantity;
    var sequence = null;
    var timeinforce = req.body.timeinforce;
    var result = await fun.placeOrder(address, symbol, side, price, quantity, sequence, timeinforce)
    res.send(result);
})

app.post('/Market', async function (req, res) {
    var offset = null;
    var limit = 1000;
    var result = await fun.getMarkets(offset, limit)
    res.send(result);
})


app.post('/Transfer', async function (req, res) {
    var addressFrom = req.body.addressFrom;
    var addressTo = req.body.addressTo;
    var amount = req.body.amount;
    var asset = req.body.asset;
    var message = req.body.message;
    var result = await fun.transfer(addressFrom, addressTo, amount, asset, message)
    res.send(result);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))