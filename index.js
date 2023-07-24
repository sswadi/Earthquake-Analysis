const express = require('express'); //setting up express server
const port = 8000; //port num
const db = require('./config/mongoose'); //requiring mongoose config

const app = express(); //running express servers

app.use(express.static('./assets'));

//setting up views template: ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//requiring routes
app.use('/', require('./routes/index'));


app.listen(port, function(err) {
    console.log(`Server running on port ${port}`)
});

