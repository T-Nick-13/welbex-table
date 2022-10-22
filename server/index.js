const express = require('express');
require('dotenv').config();
const cors = require('cors');
const recordRouter = require('./routes/record');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', recordRouter);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
