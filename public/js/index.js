const socket = io();

socket.on('connect', () => {
    console.log(`Connected To Server`);


});

socket.on('newMessage', (message) => {
    console.log(message);
})

socket.on('disconnect', () => {
    console.log(`Server not connected`);
});