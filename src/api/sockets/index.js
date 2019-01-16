module.exports = io => {

    io.sockets.on("connection", (socket) => {

        let data = socket.conn.request._query;

        socket.join("room " + data.roomId)

        io
        .in("room "  + data.roomId)
        .clients((error, clients) => {
               io
               .in("room " + data.roomId)
               .emit("nowLooking", clients.length - 1);
            });

        socket.on("disconnect", () => {

            socket.leave("room "  + data.roomId);

            io
            .in("room "  + data.roomId)
            .clients((error, clients) => {
                   io
                   .in("room " + socket.conn.request._query.roomId)
                   .emit("nowLooking", clients.length - 1);
                });

            socket.disconnect();
        });
    });

};