// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL connection
const db = mysql.createConnection({
    host: '127.0.0.1',  // Update if necessary
    user: 'root',       // Your MySQL username
    password: 'Nehil@2004',       // Your MySQL password
    database: 'banner_db',
    port: 3306          // Update if your MySQL server uses a different port
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Home route to render HTML
app.get('/', (req, res) => {
    const query = 'SELECT * FROM banner_settings WHERE id = 1';
    db.query(query, (err, result) => {
        if (err) throw err;
        const banner = result[0];
        res.render('index', { banner: banner });
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
