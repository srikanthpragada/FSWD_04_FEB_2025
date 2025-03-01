var mysql2 = require('mysql2/promise');
var { connectionDetails } = require('./util')

async function list_employees() {
  const con = await mysql2.createConnection(connectionDetails);
  const [rows, fields] = await con.execute('SELECT * FROM employees');
  //console.log(rows)  // rows is an Array of JS object 
  //console.log(fields)
  for(let emp of rows) {
    console.log(`${emp.fullname} - ${emp.salary}`)
  }
  await con.end();
}


list_employees()


    
 