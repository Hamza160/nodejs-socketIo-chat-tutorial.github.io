const path = require('path');
const express = require('express');
const socketIo = require('socket.io');
const http = require('http');
const publicPath = path.join(__dirname, '/../public');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static(publicPath));

const server = http.createServer(app);
const io = socketIo(server);

/*Listening The Event => When Client Connect To Server*/
io.on('connection', (socket) => {
    console.log(`A New User Just Connected`);

    socket.on('disconnect', () => {
        console.log(`User was disconnected`)
    })
});



server.listen(PORT, () => console.log(`Server is started on PORT:${PORT}`));

// console.log(__dirname + "/../public");
// console.log(path.join(__dirname, '/../public'));