import bcrypt from "bcrypt";
const saltRounds = 10;

function hashPassword(paswd) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(paswd, salt);

  return hash;
}

function checkPassword(paswd) {
  bcrypt.compare(paswd, hash, function (err, result) {
    if (err) return err;
    else return result;
  });
}

export { hashPassword, checkPassword };
