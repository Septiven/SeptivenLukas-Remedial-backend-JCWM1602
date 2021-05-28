const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

// main app
const app = express()

// apply middleware
app.use(cors())
app.use(bodyparser.json())

// Import Router
const salesRouter = require('./routers/salesRouter')
const adminRouter = require('./routers/adminRouter')

// main route
const response = (req, res) => res.status(200).send('<h1>Remedial backend Septiven Lukas JCWM1602</h1>')
app.get('/', response)

app.use('/sales', salesRouter)
app.use('/admin', adminRouter)

// bind to local machine
const PORT = process.env.PORT || 5000
app.listen(PORT, () => `CONNECTED : port ${PORT}`)