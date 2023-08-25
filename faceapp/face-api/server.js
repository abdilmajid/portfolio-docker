const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();



const register = require('./Controller/register');
const signin = require('./Controller/signin');
const profile = require('./Controller/profile');
const image = require('./Controller/image');

const db = knex({
  client: 'pg',
  connection: {
    // host : process.env.RDS_HOSTNAME,
    // port : process.env.RDS_PORT,
    // user : process.env.RDS_USERNAME,
    // password : process.env.RDS_PASSWORD,
    // database : process.env.RDS_DATABASE
  
    //Need to use ip of HOST machine, issue with using '127.0.0.1' or 'localhost' when running inside contatainer
    host: '192.168.50.56',
    port: 5432,
    user: 'app',
    password: '',
    database: 'faceapp'
  }
});



const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use(express.static('./public'));
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '..', 'face-web', 'build', 'index.html'));
// });

app.get('/api', (req, res) => { res.send('It Works') })
app.post('/api/signin', (req, res) => signin.handleSignIn(req, res, db, bcrypt))
app.post('/api/register', (req, res) => register.handleRegister(req, res, db, bcrypt));
app.get('/api/profile/:id', (req, res) => profile.handleProfile(req, res, db));
app.put('/api/image', (req, res) => image.handleImage(req, res, db));
app.post('/api/imageurl', (req, res) => { image.handleApiCall(req, res)})


app.listen(process.env.PORT || 3001, ()=> {
  console.log(`app is running on port ${process.env.PORT}`);
})


