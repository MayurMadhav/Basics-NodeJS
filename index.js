// Requiring express.js
// Requiring FileSystem Module
// Changing the module to object to use its inbuilt functions
// Port number to run the port
// Server Setup

const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()
const port = 5556

let employees = [{
  "name": "Dileep Kumar",
  "phone": "9128732881",
  "role": "Cook",
  "DayOFF": "Sunday",
  "Gender": "Male",
  "salary": 6000,
  "bonus":  0.05
  },
  {
    "name": "Shamala CA",
    "phone": "9132819381",
    "role": "Auditor",
    "DayOFF": "Sunday",
    "Gender": "Female",
    "salary": 25000,
    "bonus":  0.10
  },
  {
    "name": "Usha PT",
    "phone": "9441232388",
    "role": "Food Counter",
    "DayOFF": "Friday",
    "Gender": "Female",
    "salary": 9000,
    "bonus":  0.08
}
];

let WrtData = JSON.stringify(employees,null,2);
fs.writeFileSync('MySweets.json',WrtData);
app.listen(port, () => {
    console.log(`port running at port: ${port}`)
})

app.use(express.static(path.join(__dirname,'./NodeJS/')))

var data = fs.readFileSync('./MySweets.json'), myobj;

try {
  myobj = JSON.parse(data);
  console.dir(myobj);
}
catch (err){
  console.log('There is an error')
  console.log(err);
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})
app.get('/home', (req, res) => {
  res.sendStatus(200)
})


app.get('/Employee', (req, res) => {
  fs.readFile('./MySweets.json', (err, data) => {
      if(!err) {
          res.write(data)
          res.end()
          return
      }
      res.write("Error reading MySweets.json file")
      res.end()
      console.log("Error reading MySweets.json file")
  })
})








/*app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,'./NodeJS/index.html'))
})

app.get('./MySweets.json', (req, res) => {
  fs.readFile('./MySweets.json', (err,jsonData)=>{
    if (err)  {
      res.write("error reading json file")
      res.end()
      console.log(err);
      return;
    }
    res.write(jsonData)
    res.end()
    console.log(JSON.parse(jsonData));
  
  })  
})

*/


/*
// Get request to send the data to the server

*/
  
