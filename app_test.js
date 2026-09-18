//apptest.js
// Express 모듈 불러오기 & Express 매플리케이션 인스턴스 생성
const express = require('express');
const app = express();

// 프론트엔드가 보낸 JSON 데이터를 읽기 위한 필수 설정
app.use(express.json());

/* app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
}); */
module.exports = app;

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
    res.send('이 페이지는 About 페이지입니다.');
});

app.get('/user/:name', (req, res) => {
    res.send(`${req.params.name}님, 안녕하세요!`);
});

// AI API를 호출하는 라우트 (async/await 사용)
app.post('/ask-ai', async (req, res) => {
  try {
    // 1. 프론트엔드나 Postman에서 보낸 질문 가져오기
    const userQuestion = req.body.question;

    // 2. 이 위치에 주최 측/OpenAI의 API 호출 코드를 넣습니다.
    // (예시: const aiResponse = await callAiApi(userQuestion);)
    const aiResponse = `AI가 답변합니다: '${userQuestion}'에 대한 결과입니다.`;

    // 3. AI 답변을 프론트엔드/사용자에게 전달
    res.json({ result: aiResponse });

  } catch (error) {
    console.error(error);
    res.status(500).send('AI API 호출 중 에러 발생');
  }
});

// node 명령어로 실행
