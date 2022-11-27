const jwt = require("jsonwebtoken");
const REFRESH_JWT_SECRET = "refresh";
const ACCESS_JWT_SECRET = "access";

const accessToken = (id) => {
    return jwt.sign({ id }, ACCESS_JWT_SECRET, {
        expiresIn: "20s",
    });
};

const refreshToken = (id) => {
    return jwt.sign({ id }, REFRESH_JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = { accessToken, refreshToken };
