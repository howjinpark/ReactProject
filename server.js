const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// JSON 요청 본문 파싱
app.use(express.json());

// URL-encoded 요청 본문 파싱
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req,res)=>{
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name' : '홍길동',
        'birthday' :'001230',
        'gender' :'남자',
        'job': '대학생'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name' : '홍길동2',
        'birthday' :'001130',
        'gender' :'남자',
        'job': '고등학생'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name' : '홍길동3',
        'birthday' :'001030',
        'gender' :'남자',
        'job': '중학생'
      }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
