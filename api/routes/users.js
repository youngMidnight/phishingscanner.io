var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const storage = require('multer-gridfs-storage')({
  url: 'http://localhost:3000'
});


const upload = multer({ storage });
    router.post('/', upload, (req, res) => {

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});
app.get('/api/secret', function(req, res) {
  res.send('The password is potato');
});
});

module.exports = router;
