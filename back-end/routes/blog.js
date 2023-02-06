const { verifyToken } = require("../security/token");

const blogRoute = (app) => {
  app.get("/blog", verifyToken, async (req, res) => {
    res.send("Logged in");
  });
};

module.exports = { blogRoute };