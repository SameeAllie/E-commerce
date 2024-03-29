const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const { handleError, ERROR_CODES } = require("../utils/errors");

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      res
        .status(ERROR_CODES.Unauthorized)
        .send({ message: "Authorization required" });
      return;
    }

    const token = authorization.replace("Bearer ", "");
    let payload;

    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      res
        .status(ERROR_CODES.Unauthorized)
        .send({ message: "Authorization required" });
      return;
    }
    req.user = payload;
    next();
  } catch (err) {
    handleError(err, res);
  }
};

// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("../utils/config");
// const { UnauthorizedError } = require("../errors/unauthorized-error");

// module.exports.authorization = (req, res, next) => {
//   try {
//     const { authorization } = req.headers;

//     if (!authorization || !authorization.startsWith("Bearer ")) {
//       next(new UnauthorizedError("Authorization required"));
//       return;
//     }

//     const token = authorization.replace("Bearer ", "");
//     let payload;

//     try {
//       payload = jwt.verify(token, JWT_SECRET);
//     } catch (err) {
//       next(new UnauthorizedError("Authorization required"));
//       return;
//     }

//     req.user = payload;
//     next();
//   } catch (err) {
//     next(err);
//   }
// };
