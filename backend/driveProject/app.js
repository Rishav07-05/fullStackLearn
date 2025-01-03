const express = require('express');
const UserRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
const cookieParser = require('cookie-parser')
const indexRouter = require ('./routes/index.routes')
const app = express();



dotenv.config();

connectToDB();


app.set('view engine', 'ejs')

app.use('/' , indexRouter)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user' , UserRouter)



app.listen(3000, () => {
    console.log('Listening to port 3000');
})