const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

require('./app/routes/index')(app);

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.listen(process.env.PORT);