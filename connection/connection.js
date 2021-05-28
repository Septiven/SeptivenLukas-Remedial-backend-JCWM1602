const mysql = require('mysql')

// Connection
const db = mysql.createConnection({
    user: 'root',
    password: 'Lukas',
    database: 'db-septivenlukasjcwm1602',
    port: 3306
})

module.exports = db