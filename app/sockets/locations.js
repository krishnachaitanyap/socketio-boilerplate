export default (socket) => {
  setInterval(() => {
    socket.emit('initialize', [
      { "id": 1, "name": "Ljubljana", "updatedAt": Date.now() },
      { "id": 2, "name": "Maribor", "updatedAt": Date.now() }
    ]);
  }, 1000);

  socket.on('message', function(data) {
    console.log(data);
  });
};
