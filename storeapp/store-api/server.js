const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require('dotenv');
const path = require('path');
dotenv.config()


const app = express()




// Extended true ->is a nested  
// Extended False ->not nested object
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// localhost../..html is served from public folder
// app.use(express.static('./public'));
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });


//importing routes from different file
const router = require('./routes')
app.use(router)



app.listen(process.env.PORT || 4001, ()=> {
  console.log(`app is running on port ${process.env.PORT}`);
})