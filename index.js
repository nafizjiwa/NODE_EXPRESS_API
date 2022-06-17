const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res, next) => res.send('Hello from the HomePage!'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

module.exports = app;
