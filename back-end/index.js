const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const {userRoute} = require('./routes/user');
const {blogRoute} = require('./routes/blogs')


app.use(bodyParser.json())


const  url = "mongodb+srv://NosiphiwoB:biyela0305@cluster0.lr5epya.mongodb.net/Reg-Log-in_Form?retryWrites=true&w=majority"
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Connected");
});


blogRoute(app)
userRoute(app)

app.listen(4008 , () => {
   console.log("port running on port 4008")
})