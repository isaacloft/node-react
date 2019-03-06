const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
require('./routes/authRoutes')(app);

// The order of below two require statements matters, as passport is using
// User as model
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
