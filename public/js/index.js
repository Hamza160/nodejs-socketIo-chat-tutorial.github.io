const socket = io();

socket.on('connect', () => {
    console.log(`Connected To Server`);

});

socket.on('newMessage', (message) => {
    console.log(message);
    const li = document.createElement('li');
    li.innerText = `${message.from}: ${message.text}`;
    document.querySelector('body').appendChild(li);
})

socket.on('disconnect', () => {
    console.log(`Server not connected`);
});

socket.emit(
    'createMessage', 
    {from:'Hamza', text:'How how are you'},
    (message) => console.log(`${message}: Server got it`)
);

document.querySelector('#submit-btn')
.addEventListener('click', (e) => {
    e.preventDefault();

    socket.emit("createMessage", {
        from: 'User',
        text: document.querySelector('input[name="message"]').value,
        createdAt: new Date().getTime()
    }, () => {

    });

})


document.querySelector('#sendLocation')
.addEventListener('click', (e) => {

    if(!navigator.geolocation){
        return alert('Geo Location is not supported by your browser');
    } 

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit(`createLocationMessage`, {
            lat:position.coords.latitude,
            lng:position.coords.longitude,
        });
    }, () => alert(`Unable to fetch location`));

});