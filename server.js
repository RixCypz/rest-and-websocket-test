
const express = require('express')
const path = require('path');
const app = express()
const WebSocket = require('ws');
const mongoose = require('mongoose');
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server:server });

const PORT = process.env.PORT || 8000
const uri = "mongodb+srv://cypz:weak@cluster0.q6dxq.mongodb.net/mydb?retryWrites=true&w=majority";

const bookRouter = require('./routes/bookRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get ( "/", function ( req, res ){
	res.render ( "index" );		
})

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected...')).catch(err => console.log(err));

app.use('/', bookRouter);

// app.get('/', (req, res) => res.send('Hello World'));

app.listen(PORT, () => {

    console.log(`Server is running on port : ${PORT}`)
});

module.exports = app