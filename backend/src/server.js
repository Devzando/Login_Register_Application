const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./router.js');

app.use(cors());
app.use(express.json());

app.use(routers);

app.listen(3333, () => console.log('server is running'));