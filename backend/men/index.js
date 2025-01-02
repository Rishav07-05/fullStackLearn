// About http and req,res argument

// const catMe = require('cat-me')
// console.log(catMe());

// const { log } = require('console')
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Home Page')
//     }

//     if (req.url === '/about') {
//         res.end('About Page')
//     }

//     if (req.url === '/profile') {
//         res.end("The Profile Page")
//     }

// })

// server.listen(3000)




// express for production grade work 
// Get method && setting rendering engine -> EJS && middlewares


const express = require('express')
const morgan = require('morgan');
const userModel = require('./models/user');
const dbConnection = require('./config/db');
const app = express();
app.use(morgan('dev'))


app.set('view engine', 'ejs')


// Custom middleware

// app.use((req, res, next) => {
//     console.log('This are middlewares');
//     const a = 2, b = 2;
//     console.log(a + b)
//     return next();
// })

// Third Party middleware -> Morgan (Request Logger)



// Built-in Middleware need to be used for post method to get data in console 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Built-in middlewares to link css 
app.use(express.static("public"))



//GET method => frontend to server

app.get('/', (req, res, next) => {
    const a = 5, b = 5;
    console.log(a + b);
    return next();
},(req, res) => {
    res.render('index')
})


app.get('/about', (req, res) => {
    res.send('About Page')
})


// POST method => server to frontend

app.post('/get-form-data', (req , res) => {
    console.log(req.body);
    res.send('data received')
})



app.get('/register', (req,res) => {
    res.render('register')
})

// Create a user => CRUD Operation

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    const newUser = await userModel.create({
        username: username, 
        email: email,
        password:password
    })

    res.send(newUser)
})

// Read a user => CRUD Operation

app.get('/get-users', (req, res) => {
    userModel.find().then((users) => {
        res.send(users)
    })
})


// Update a user => CRUD Operation 

app.get('/update-user',async (req, res) => {
    await userModel.findOneAndUpdate({
        username: 'hello'
    }, {
        email: 'hello@hello.com'
    })
    res.send('User updated')
})


// Delete a user => CRUD Operation

app.get('/delete-user', async (req, res) => {
    await userModel.findOneAndDelete({
        username: 'rishav'
    })
    res.send('User deleted')
})


app.listen(3000);