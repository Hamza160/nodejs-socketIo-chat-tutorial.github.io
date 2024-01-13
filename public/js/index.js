 const socket = io();

/*When Client Connect To Server*/ 
socket.on('connect', () => {
    console.log(`Connected To Server`);

    // Creating Event
    socket.emit('createMessage', {
        from: "WDJ",
        text: "Wats going on!"
    });

});


/*When CLient Disconnect*/
socket.on('disconnect', () => {
    console.log(`Disconnected From Server`);
}); 

socket.on('newMessage', (message) => {
    console.log("newMessage", message);
});