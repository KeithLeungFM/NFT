//NOT IN USE
const { json } = require('body-parser');
const express = require('express')
const router = express.Router();
var path = require('path');

//const mongoose = require('../db/mongoose')



router.get('/domain/:domain?', async (req,res)=>{

})




router.get('/nft/:index', (req,res)=>{
    console.log('API called yay')
    console.log(req.params.index)
    res.sendFile(path.resolve('nfts/nft1.gif'));

})

module.exports = router;