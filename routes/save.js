// mysql 연동 접속 정보
var mysql = require("mysql2");
var conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    port : 3306,
    database: "myrecipe",
});

conn.connect();

const express = require('express');
const path = require('path');

const router = express.Router();

// custom페이지의 폼입력 데이터 서버로 받아오기
router.post('/', function(req, res){
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    // mysql의 insert문으로 폼에서 입력받은 데이터 저장
    let sql = "insert into post2 (id, foodname, ingredient, category) values(?, ?, ?, ?)";
    let params = [req.body.id, req.body.foodname, req.body.ingredient, req.body.category];
    conn.query(sql, params, function(err, result){
        if(err) throw err;
        console.log('데이터 추가 성공');
    });
    // 입력받은 데이터를 data에 넣어 save.ejs로 전달 
    res.render('save.ejs',{data:obj})
});

module.exports=router;