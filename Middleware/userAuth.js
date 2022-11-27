const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "access", (err, user) => {
            if (!err) {
                req.user = user;
                next();
            } else {
                res.status(403).send("user not authorized");
            }
        });
    }

    if (!token) {
        res.status(401).send("Not authorized, no token");
    }
};

module.exports = { protect };
