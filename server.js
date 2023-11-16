const express = require('express');

const homeRouter = require('./routes/home');
const riceRouter = require('./routes/rice');
const breadRouter = require('./routes/bread');
const noodleRouter = require('./routes/noodle');
const soupRouter = require('./routes/soup');
const customRouter = require('./routes/custom');
const saveRouter = require('./routes/save');

// 미들웨어보다 위에 있어야 함.
const app = express();
// 포트 번호는 8000으로 설정
app.set('port', process.env.PORT||8000);

// ejs 템플릿 사용 
app.set('view engine' , 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//body-parser 라이브러리 추가
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// 정적 주소 설정 없으면 css 스타일 적용 안됨.
app.use(express.static('webpage'));

app.use('/', homeRouter);
app.use('/rice', riceRouter);
app.use('/bread', breadRouter);
app.use('/noodle', noodleRouter);
app.use('/soup', soupRouter);
app.use('/custom',customRouter);
app.use('/save',saveRouter);

//listen 함수로 서버를 띄우고 클라이언트의 요청 기다림.
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중');
});