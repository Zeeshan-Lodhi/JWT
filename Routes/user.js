const { login } = require("../Controler/user");

const userRouter = require(`express`).Router();

userRouter.post("/login", login);

module.exports = { userRouter };
