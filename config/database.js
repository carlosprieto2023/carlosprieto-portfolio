const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
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
