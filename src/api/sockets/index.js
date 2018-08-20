module.exports = io => {
    io.on('connection', socket => {

        socket.emit("change", `Connected with id: ${socket.id}.`);

        socket.join("test");

        socket.on("change", data => {
            io.to("test").emit("change", `Socket ${socket.id}: ${data}`);
        });

        socket.on("disconnect", () => {
            io.to("test").emit("change", `Socket ${socket.id} has been disconnected!`);
        });
    });
};