import express from 'express'
import cors from "cors"
import healthCheckRouter from './routes/healthCheck_Route.js'

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)



// common middlewares

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

//routes 

app.use("/api/v1/healthCheck" , healthCheckRouter)

export { app }