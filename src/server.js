const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 1903

app.use(express.json())
app.use(cors())

const taskRouter = require('./routes/tasksRouter')

app.use('/api', taskRouter)

app.listen(port, () => console.log(`Run on port ${port}!`))