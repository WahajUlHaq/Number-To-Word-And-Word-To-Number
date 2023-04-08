const express = require('express')
const userRouter = require('./src/routers/user/index')
require('./src/database/index')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server Is Listening On Port: ' + port)
})