const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '../public'); // Adjusted path

const PORT = process.env.PORT || 5000;

/* Creating Server For SocketIO */
const server = http.createServer(app);
const io = socketIo(server);

// Listenig to a connection
io.on('connection', (socket) => {
    console.log(`A New User Just Connected!`);

    socket.on('disconnect', () => {
    console.log(`Client Disconnected`)
})

});



app.use(express.static(publicPath));

server.listen(PORT, () => console.log(`Server is started on PORT: ${PORT}`));
