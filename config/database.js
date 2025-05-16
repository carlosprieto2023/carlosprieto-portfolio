const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`✅ Connected to ${db.name} at ${db.host}:${db.port}`);
});

db.on('error', function (err) {
  console.error('❌ MongoDB connection error:', err);
});
