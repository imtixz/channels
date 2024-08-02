const httpServer = require("./server/");

const PORT = 8383;
httpServer.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
