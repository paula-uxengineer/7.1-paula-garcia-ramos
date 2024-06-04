const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

const Sockets = require("./sockets");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    dbConnection();

    this.server = http.createServer(this.app);

    this.io = socketio(this.server, {
      cors: {
        origin: "*",
      },
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use("/api/login", require("../router/auth"));
    this.app.use("/api/mensajes", require("../router/mensajes"));
  }

  // Esta configuración se puede tener aquí o como propieda de clase
  // depende mucho de lo que necesites
  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middlewares();

    this.configurarSockets();

    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

module.exports = Server;
