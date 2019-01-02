const path = require("path"),
    express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    compression = require("compression"),
    server = require("http").Server(app),
    elasticService = require("./src/api/elastic/elasticService");

const io = require("socket.io")(server, { serveClient: true });

const apiRoot = path.resolve(path.join(__dirname, "src/api"));

require(`${apiRoot}/helpers/passport`);

const port = 5000;

app.use(cors({ origin: "*", credentials: true }));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./src/api/middleware")(app); //adding jwt and other
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
const routes = require("./src/api/routes")(app); // Here all express routers come into the game
app.get("/*", (req, res) => {
    const fileDirectory = path.join(__dirname, "public");

    res.sendFile("index.html", { root: fileDirectory }, err => {
        res.end();
    });
});

const sockets = require("./src/api/sockets")(io);
const orm = require(`${apiRoot}/models`);
orm.then(() => {
    server.listen(port, () => {
        console.log("Server running on http://127.0.0.1:%s", port);
        elasticService.indexData();
    });
});
