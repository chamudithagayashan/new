const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mybank'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/addUser', (req, res) => {
  const uname = req.body.uname;
  const pswd = req.body.pswd;

  const sql = `INSERT INTO data (username, password) VALUES (?, ?)`;
  connection.query(sql, [uname, pswd], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error occurred while saving the data');
      
    } else {
      console.log('User added successfully');
      res.send('User added successfully');
    }
  });
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
