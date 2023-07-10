import bcrypt from "bcrypt";
const saltRounds = 10;

function hashPassword(paswd) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(paswd, salt);

  return hash;
}

function checkPassword(passwd, hashedPaswd) {
  // Load hash from your password DB.
  return bcrypt.compareSync(passwd, hashedPaswd); // true / false
}

export { hashPassword, checkPassword };
