const http = require('http');
const path = require('path');
const express = require('express');
const socketIo = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/message');

const app = express();

const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, '/../public');
app.use(express.static(publicPath));
const server = http.createServer(app);

const io = socketIo(server);

// Socket For Single User;
// IO For All Users For Broad Casting;
io.on('connection', (socket) => {
    console.log(`A new user just joined`);

      // From Admin
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

      // From Admin
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

    socket.on('createMessage', (message, callback) => {
        console.log(message);

        // Broad Costing a Message For Everyone
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // })

        // Broadcast to a single socket
        socket.broadcast.emit('newMessage', generateMessage(message.from, message.text))
        callback(`This is the server`)
    })


    socket.on(`createLocationMessage`, (coords) => {
      io.emit('newLocationMessage', generateLocationMessage(`Admin`,  coords.lng, coords.lat));
    });

    socket.on('disconnect', () => {
        console.log(`User not connected`);
    });

});

server.listen(PORT, () => console.log(`Server is started on PORT:${PORT} http://localhost:5000`));