require("dotenv").config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const Port = process.env.PORT || 5000;
const userRoute= require('./routes/users')
const authRoute=require('./routes/auth')

connection();

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(Port, () => console.log(`Listening on port ${Port}`));
