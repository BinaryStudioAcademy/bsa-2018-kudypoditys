const path = require("path"),
    express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    cookieParser = require('cookie-parser'),
    compression = require("compression"),
    server = require("http").Server(app);

const io = require("socket.io")(server, {serveClient: true});

const apiRoot = path.resolve(path.join(__dirname, "src/api"));

const port = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

require('./src/api/middleware')(app);   // adding jwt and other

const routes = require("./src/api/routes")(app);
app.get("/*", (req, res) => {
    const fileDirectory = path.join(__dirname, "public");

    res.sendFile("index.html", {root: fileDirectory}, err => {
        res.end();
    });
});

const sockets = require("./src/api/sockets")(io);

server.listen(port, () => {
    console.log("Server running on http://127.0.0.1:%s", port);
});

require(`${apiRoot}/testModels`)();
