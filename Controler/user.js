const { accessToken, refreshToken } = require("../Utils/generateToken");

const login = (req, res) => {
  const accesstoken = accessToken(1);
  const refreshtoken = refreshToken(1);
  res.json({ accesstoken, refreshtoken });
};

module.exports = { login };
