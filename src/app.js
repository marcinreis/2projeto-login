//importar modulo express

const express = require('express')
const app = express()
const port = 3000

//importar modulo sql
const sql = require('mysql2')
//configuraçao de conexao
const conexao = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1,2,3,4,',
  database: 'projeto'  
});


app.get('/', (req, res) => {
  res.send('Hello World!')
  res.end();
})

app.listen(port)
 