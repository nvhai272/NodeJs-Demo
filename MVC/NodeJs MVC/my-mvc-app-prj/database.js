const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/database_name'; // Địa chỉ MongoDB và tên cơ sở dữ liệu

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to the database');
  });
  
  module.exports = db;