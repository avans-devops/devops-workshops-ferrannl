const io = require("socket.io")();
const socketapi = {
    io: io
};

io.on("connections", function(socket) {
    console.log("A user connected");

    socket.on('disconnected', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

});

module.exports = socketapi