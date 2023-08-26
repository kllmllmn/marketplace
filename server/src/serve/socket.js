const express = require("express");
let socketio = require("socket.io");
const app = require("http").createServer();
let io = socketio(app, { cors: true });
// 可以的，Express的listen方法可以接受两个参数：端口号和回调函数。你可以在第一个参数中指定域名和端口号，例如：

// app.listen(3000, 'example.com', () => {
//   console.log('Server started on example.com:3000');
// });
// 这样，你的Express应用就会绑定到指定的域名和端口上。请注意，你需要确保你的应用能够访问该域名，并且在DNS中正确配置了域名解析。
const PORT = 4090;
const HOST = "192.168.0.102";
let clientCount = 0;

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});

io.on("connection", function (socket) {
  clientCount++;
  socket.nickname = "user" + clientCount;
  io.emit("enter", socket.nickname + " comes in");

  socket.on("message", function (str) {
    io.emit("message", socket.nickname + " says: " + str);
  });

  socket.on("disconnect", function () {
    io.emit("leave", socket.nickname + " left");
  });
});
