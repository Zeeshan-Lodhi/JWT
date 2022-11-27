const express = require("express");
const { noteRouter } = require("./Routes/note");
const { userRouter } = require("./Routes/user");
const app = express();

app.use(express.json());

app.use(`/`, userRouter);
app.use(`/`, noteRouter);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
