var express = require('express');
var path = require('path');
var app = express();
var port = 3000
 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("interest")  
})
 
app.get('/interest', (req, res) => {
  let amount = parseInt(req.query.amount)
  let interest = amount * 15 / 100 
  res.render("interest_result" ,
        {amount : amount,
         interest : interest})  
})


app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
