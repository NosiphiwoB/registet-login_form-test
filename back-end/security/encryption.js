var bcrypt = require("bcryptjs");

const encryptedPassword = async (password) => {
  var hashedPword = await bcrypt.hash(password, 10);
  return hashedPword;
};


const comparePassword = async (password , hashedPassword) => {
   var isCorrect = await bcrypt.compare(password, hashedPassword)
   return  isCorrect 
}



module.exports = { encryptedPassword , comparePassword };