// const express = require('express')
// const events = require('./data/events')
//import events from './data/events.js'
import express from 'express';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes.js'
import mapRoutes from './routes/mapRoutes.js'
import connectDB from './config/db.js';
import errorHandler from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import path from 'path'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/map', mapRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

app.use(errorHandler)
const port = process.env.PORT
app.listen(port, console.log(`Server is running on port ${port}`))