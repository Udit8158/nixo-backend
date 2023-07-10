import jwt from "jsonwebtoken";

function createToken(data) {
  const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;
  const token = jwt.sign(data, jwtPrivateKey);
  return token;
}

function verifyToken(token) {
  const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;
  const data = jwt.verify(token, jwtPrivateKey);
  return data;
}

export { createToken, verifyToken };
