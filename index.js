const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json()); 

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12773410',

  password: '6GX3rYWQK5',
  database: 'sql12773410',
  port: 3306
});
 port=5000;
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/permission', (req, res) => {
  db.query('SELECT * FROM Permissions', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.stack);
      res.status(500).send('Error fetching data');
    } else {
      res.json({"sucess":true,"data":results}); 
    }
  });
});

app.post('/addpermission', (req, res) => {
  const { name, description } = req.body;
  db.query('INSERT INTO Permissions (name, description) VALUES (?, ?)', [name, description], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      res.status(500).send('Error inserting data');
    } else {
      res.json({"success":true, "message": "Permission added successfully"}); 
    }
  }); 
});     
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

