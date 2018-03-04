const express = require('express');
var helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(express.static('client'));

app.listen(3000, () => console.log(`Example app listening on port 3000!, node env: ${process.env.NODE_ENV}`))