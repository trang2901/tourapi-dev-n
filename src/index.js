const express=require('express');
const route=require('./routers');
const app=express();
var cors = require('cors');
const path=require('path');
 
app.use(cors());
const port= process.env.PORT || 3000;

//Connect to database
const db=require('./app/config/db');
db.connect();

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));//middleware

//Init Router
route(app);

app.listen(port);