const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const bodyparser = require("body-parser");
const path = require('path');
const req = require("express/lib/request");

const connectToDB = require('./serverFiles/dbCon/connection'); 


dotenv.config({path: "config.env"})



const PORT = process.env.PORT || 8080

app.use(morgan('tiny'));
connectToDB();
app.use(bodyparser.urlencoded({extended : true}))

app.set("view engine", "ejs")

app.use('/css', express.static(path.resolve(__dirname, "projectAssets/css")))
app.use('/imgages', express.static(path.resolve(__dirname, "projectAssets/images")))
app.use('/js', express.static(path.resolve(__dirname, "projectAssets/js")))

//css/style.css


//Load routers
app.use('/', require('./serverFiles/routes/routes'))


app.listen(3000, ()=>{ console.log('Server is running on http://localhost:3000')});
