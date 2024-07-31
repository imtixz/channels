const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("client"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

const PORT = process.env.PORT || 8006;

app.listen(PORT, () => console.log(`Frontend Server started on port ${PORT}`));
