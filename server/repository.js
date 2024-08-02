const db = require("./db.json");
const fs = require("fs");

module.exports = {
  verifyChannel: (channel, password) => {
    const result = db.filter((v) => {
      return v.channel == channel;
    })[0];

    return result?.password == password;
  },

  createChannel: (channel, password) => {
    const channelExists = db.filter((v) => {
      return v.channel == channel;
    });

    if (channelExists.length) {
      throw new Error("Channel already exists!");
    }

    db.push({
      channel: channel,
      password: password,
    });

    fs.writeFileSync("./db.json", JSON.stringify(db));

    return;
  },
};
