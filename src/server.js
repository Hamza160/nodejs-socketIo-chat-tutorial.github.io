const http = require('http');
const path = require('path');
const express = require('express');
const socketIo = require('socket.io');

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
    socket.emit('newMessage', {
        from:'Admin',
        text:'Welcome to the chat app',
        createdAt: new Date().getTime()
    })

      // From Admin
    socket.broadcast.emit('newMessage', {
        from:'Admin',
        text:'New User Joined',
        createdAt: new Date().getTime()
    })

    socket.on('createMessage', (message) => {
        console.log(message);

        // Broad Costing a Message For Everyone
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // })

        // Broadcast to a single socket
        socket.broadcast.emit('newMessage',{
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    })


    socket.on('disconnect', () => {
        console.log(`User not connected`);
    });

});

server.listen(PORT, () => console.log(`Server is started on PORT:${PORT} http://localhost:5000`));