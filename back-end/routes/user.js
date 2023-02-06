const { response } = require("express");
const User = require("../models/user");
const { encryptedPassword, comparePassword } = require("../security/encryption");

const userRoute = (app) => {


  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const foundUser = await User.find({ email: email });
      if (foundUser.length > 0) {
        const isPasswordCorrect = await comparePassword(
          password,
          foundUser[0].hashPassword
        );
        if (isPasswordCorrect === true) {
          const token = createToken(foundUser);
          return res.json({ token : `Bearer ${token}` });
        }
      }

      return res.send("incorrect details");
    } catch (e) {
      console.log("e" , e)
     return res.send(500);
    }
  });

  app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    try {
      const foundUser = await User.find({ email: email });
      if (foundUser.length > 0) {
        return res.send(400);
      }

      var hashedPassword = await encryptedPassword(password);
      console.log("hashedPassword", hashedPassword);
      const user = User({
        hashedPassword: hashedPassword,
        email: email
      });

      const savedUser = await user.save();
      return res.json({ token : `Bearer ${token}` });
    } catch (e) {
      console.log("e", e);
      return res.send(500);
    }
  });
};

module.exports = { userRoute };