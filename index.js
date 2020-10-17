const express = require('express')
const port = 5000
const cors = require('cors')
const userRouter = require('./routers/user')
require('dotenv').config()
require('./db/db')

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${port}`)
})