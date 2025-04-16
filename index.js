const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json()); 

// const db = mysql.createConnection({
//   host: 'sql108.infinityfree.com',
//   user: 'if0_38746181',
//   password: 'igJlcueUkcLUW',
//   database: 'if0_38746181_deliverydata',
//   port: 3306
// });
const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12773410',

  password: '6GX3rYWQK5',
  database: 'sql12773410',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/data', (req, res) => {
  db.query('SELECT * FROM Permissions', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.stack);
      res.status(500).send('Error fetching data');
    } else {
      res.json({"sucess":true,"data":results}); 
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
