import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import routes from './routes/productRouts.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running... .')
})

app.use('/api/products', routes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV || "missing .env"
app.listen(PORT, console.log(`Server runnin in ${MODE} on port ${PORT}`.yellow.bold))