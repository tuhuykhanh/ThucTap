const express = require('express');
const { reset } = require('nodemon');
const {engine} = require("express-handlebars");
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routers/index')
const db = require('./config/db/index')

db.connect();



app.use(express.static(path.join(__dirname, 'public')));




app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('view engine','.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port,console.log(`app is runing with port ${port}`));
