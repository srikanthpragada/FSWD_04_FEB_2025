var mysql2 = require('mysql2/promise');
var { connectionDetails } = require("./util")

async function updateSalaries(id1, id2) {
  var con = await mysql2.createConnection(connectionDetails);
  console.log("Connected!")
  try {
    // begin transaction
    await con.beginTransaction()
    // changes 
    let [result] = await con.execute("update employees set salary = 500000 where emp_id = ?", [id1])
    if (result.affectedRows !== 1)
      throw new Error(`Id ${id1} not found`)
    else
      console.log("Updated First Employee")

    let [result2] = await con.execute("update employees set salary = 500000 where emp_id = ?", [id2])
    if (result2.affectedRows !== 1)
      throw new Error(`Id ${id2} not found`)
    else
      console.log("Updated Second Employee")

    await con.commit()   // make changes permanent 
    console.log("Committed!")
  }
  catch (error) {
    await con.rollback()  // undo changes
    console.log("Rolledback! Error : " + error.message)
  }
  await con.end()
}


updateSalaries(3, 14)

