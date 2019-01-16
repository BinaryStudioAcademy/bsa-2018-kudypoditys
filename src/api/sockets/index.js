module.exports = io => {

    let roomSockets = []

    io.sockets.on("connection", (socket) => {

        let data = socket.conn.request._query;

        roomSockets = roomSockets.concat({ socketId : socket.id, token : data.token, roomId : data.roomId })

        socket.join("room " + data.roomId)

        io
        .in("room "  + data.roomId)
        .emit("nowLooking",
                [...new Set(
                    roomSockets
                    .filter(x => x.roomId === data.roomId)
                    .map(x => x.token))
                ]
                .length - 1);

        socket.on("disconnect", () => {

            const roomId = socket.conn.request._query.roomId;

            roomSockets = roomSockets.filter(x => !(x.socketId === socket.id));

            socket.leave("room " + roomId);

            io
            .in("room "  + roomId)
            .emit("nowLooking",
                    [...new Set(
                        roomSockets
                        .filter(x => x.roomId === roomId)
                        .map(x => x.token))
                    ]
                    .length - 1);

            socket.disconnect();
        });
    });

};