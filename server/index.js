const express = require('express');
require('dotenv').config();
const recordRouter = require('./routes/record');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/', recordRouter);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
