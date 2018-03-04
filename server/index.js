const express = require('express');
var helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/', (req, res) => res.send('Hello World GET!'))
app.post('/', (req, res) => res.send('Hello POST'))

app.listen(3000, () => console.log(`Example app listening on port 3000!, node env: ${process.env.NODE_ENV}`))