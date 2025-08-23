const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Middleware
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
    res.json({ status: 200, message: "API v1.0 is ready!" })
})
app.use('/users', require('./routes/userRoutes'))

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        status: 404,
        message: "Endpoint not found"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
