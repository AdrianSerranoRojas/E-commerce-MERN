const { auth } = require("../firebase/firebase");

async function authMiddleware(req, res, next) {
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    console.log("adios");
    const bearerToken = req.headers.authorization.substr(7);
    try {
      const userClaims = await auth.verifyIdToken(bearerToken);
      const { email, uid } = userClaims;
      req.user = {
        email: email,
        uid: uid,
      };
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  } else {
    return res.status(401).send({
      data: null,
      error: "unauthorized",
    });
  }
}
module.exports = {
  authMiddleware: authMiddleware,
};
