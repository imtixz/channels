const jwt = require("jsonwebtoken");

module.exports = (socket, next) => {
  const token =
    socket.handshake.auth.token ||
    socket.handshake.headers.auth ||
    socket.handshake.auth.name;
  if (!token) {
    next(new Error("No token, authorization denied"));
  }
  try {
    const { username, channel } = jwt.verify(
      token,
      "MAKING IT EASY TO HOST @ SERVER"
    );

    socket.userName = username;
    socket.channel = channel;
    next();
  } catch (err) {
    console.log(err);
    next(new Error(err.message));
  }
};
