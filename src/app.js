const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./db/mongoos')
app.use(express.json())
const userRouter = require('./Routers/reporter')
app.use(userRouter)


app.listen(port,()=>{console.log('Server is running on port ' + port)})
