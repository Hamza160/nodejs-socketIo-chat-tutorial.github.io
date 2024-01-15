const socket = io();

socket.on('connect', () => {
    console.log(`Connected To Server`);
});

socket.on('disconnect', () => {
    console.log(`Client Disconnected`);
});