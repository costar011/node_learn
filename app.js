const express = require("express");
const morgan = require("morgan");

// app 이라는 변수를 만들었다.
const app = express();

// morgan을 dev모드로 사용할거다.
app.use(morgan("dev"));

// GET방식
app.get("/", (req, res) => {
  res.send("ham");
});

// 설정 끝난 후 Server Start
app.listen(4000, () => {
  console.log("✅ 4000 Server Start");
});
