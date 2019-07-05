const express = require('express');
const app = express();
const db = require('./models/index');

app.listen(4102, console.log('Servidor rodando'));
app.use(express.json());

app.use('/users', require("./routes/user"))
app.use('/products', require("./routes/product"))
app.use('/orders', require("./routes/order"))

db.sequelize.sync();