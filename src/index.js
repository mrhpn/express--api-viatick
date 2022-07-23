require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

require('./startup/router')(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
