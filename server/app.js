const express = require('express');
require('dotenv').config();
const cors = require('cors');
const recordRouter = require('./routes/record');

const { PORT = 3003 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', recordRouter);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
