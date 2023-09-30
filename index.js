const express = require('express');
const app = express();
const cors = require('cors');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', parameterLimit: 100000, extended: true }));
dotEnv.config({ path: './.env' });
const port =  5000 ;
const mogodb = 'mongodb+srv://rishikr725:12345@cluster0.lamiiqg.mongodb.net/?retryWrites=true&w=majority'; 

// This how to coonet to mongodb
mongoose.connect(mogodb, {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>
    console.log("Db connceted")
).catch((err)=>{
console.log(err)

})

// above cose should be in all node js file 

// this is to transfer the data from the Crud
app.use("/api", require("./routes/Crud"))


app.listen(port, () => {
  console.log(`Server started at the port ${port}`);
});