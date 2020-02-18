const jwt = require("jsonwebtoken");

module.exports = {
  authUser(req, next, res) {
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader ? bearerHeader.split(" ")[1] : undefined;
    if (token) {
      jwt.verify(token, "ayoKerja", (err, payload) => {
        if (err) throw err;
        req.user = payload;
        next();
      });
    }
  }
};
