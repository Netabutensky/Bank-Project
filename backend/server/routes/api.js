const express = require('express')
const router = express.Router()
const Transaction = require('../model/TransactionSchema')


router.post('/transcation', function (req, res) {
    let newTransaction =  new Transaction(req.body)
    newTransaction.save()
    res.send(newTransaction)
})


router.get('/transcations',  function(req, res) {
    Transaction.find({}).exec(function(err, response) {
       console.log(response)
        res.send(response)
    })
})
module.exports = router