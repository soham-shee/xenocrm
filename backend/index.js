const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8800;

app.use(express.json());
app.use(cors());
const t="campaigns"

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});


app.get('/campaigns', (req, res) => {
  db.query("SELECT * FROM test.campaigns", (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
});

app.post('/campaigns', (req, res) => {
  // const { field1, field2 } = req.body; // Assuming field1 and field2 are the fields you want to insert
  const query = 'INSERT INTO campaigns (`cid`, `cdesc`, `crules`) VALUES (?)';
  const values = [
    req.body.cid,
    req.body.cdesc,
    req.body.crules,
  ]
  db.query(query, [values], (err, results) => {
    if (err) {
      throw err;
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
