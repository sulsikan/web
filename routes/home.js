const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', function(req,res){
    //sendFile 함수를 이용하여 home.html 파일 전달
    res.sendFile(path.join(__dirname,'../webpage/home.html'))
});

module.exports = router;