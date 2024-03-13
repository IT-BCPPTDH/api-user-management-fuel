// websocket-routes.js
const uWS = require('uWebSockets.js');

module.exports = (app) => {
    app.ws('/websocket', {
        compression: uWS.SHARED_COMPRESSOR,
        maxPayloadLength: 16 * 1024 * 1024,
        idleTimeout: 10,
        open: (ws, req) => {
          console.log('WebSocket connected');
        },
        message: (ws, message, isBinary) => {
          console.log('WebSocket message received:', message);
          ws.send('WebSocket response');
        },
        drain: (ws) => {
          console.log('WebSocket backpressure: ' + ws.getBufferedAmount());
        },
        close: (ws, code, message) => {
          console.log('WebSocket closed:', code, message);
        },
      });
};
