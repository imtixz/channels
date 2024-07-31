const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const authSocket = require("./middleware");
const jwt = require("jsonwebtoken");
const { verifyChannel, createChannel, getChannels } = require("./repository");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.use(authSocket);

const messages = [];

io.on("connection", async (socket) => {
  let sockets = await io.fetchSockets();
  const users = [];

  sockets.map((socket) => {
    users.push({ name: socket.userName, channel: socket.channel });
  });

  io.emit("users", users);
  socket.emit(
    "messages",
    messages.filter((msg) => {
      return msg.channel == socket.channel;
    })
  );

  socket.on("message", async ({ message, channel }) => {
    let sockets = await io.fetchSockets();
    let vMessage = {
      name: socket.userName,
      message,
      channel: channel,
      time: new Date(Date.now()),
    };
    messages.push(vMessage);

    sockets
      .filter((_socket) => {
        return _socket.channel == channel;
      })
      .map((_socket) => {
        _socket.emit("message", vMessage);
      });
  });

  socket.on("disconnect", async () => {
    const sockets = await io.fetchSockets();
    const users = [];
    sockets.map((socket) => {
      users.push({ name: socket.userName, channel: socket.channel });
    });

    io.emit("users", users);
  });
});

app.post("/login", async (req, res) => {
  const { username, channelName, password } = req.body;

  const verified = verifyChannel(channelName, password);
  if (verified) {
    const token = await jwt.sign(
      {
        username: username,
        channel: channelName,
      },
      "MAKING IT EASY TO HOST @ SERVER"
    );
    res.json({
      token: token,
    });
  } else {
    res.status(401).json({});
  }
});

app.post("/channel/create", (req, res) => {
  const { channelName, password } = req.body;
  try {
    createChannel(channelName, password);
    res.json({});
  } catch (e) {
    console.log(e);
    res.status(500).json({});
  }
});

const PORT = 9001;
httpServer.listen(PORT, () => {
  console.log(`Signaling Server started on port: ${PORT}`);
});
