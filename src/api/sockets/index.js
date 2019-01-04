module.exports = io => {
    io.sockets.on('connection', (socket) => {

        socket.on("openPropertyPage",(room) => {
             io.of('/').in(room).clients((error,clients) => {
                 io.in(room).emit("nowLooking",clients.length - 1);
             });
        })

        socket.on('openPropertyRoom', (room) => {
            socket.join(room);
        });

        socket.on('leavePropertyRoom', (room) => {
            socket.leave(room);
            io.of('/').in(room).clients((error,clients) => {
                io.in(room).emit("nowLooking",clients.length - 1);
            });
        });

        socket.on('onClose', () => {
            const roomName = Object.keys(socket.rooms)[0];
            io.of('/').in(roomName).clients((error,clients) => {
                io.in(roomName).emit("nowLooking",clients.length - 2);
            });
            socket.leave(roomName);
        });

        socket.on("disconnect", () => {
            socket.disconnect();
        });
    });

};