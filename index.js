// server.js
const uWS = require('uWebSockets.js');
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
const masterRoutes = require('./routes/master-routes');
const operatorFuel = require('./routes/operator-fuelapp')
const websocketRoute = require('./routes/websocket-route');
require('dotenv').config();

const port = process.env.PORT;
const app = uWS.App();

// Cors Setup
app.options('/*', (res, req) => {
  res.writeHeader('Access-Control-Allow-Origin', '*');
  res.writeHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.writeHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.writeHeader('Access-Control-Allow-Cedentials', 'true');

  res.onAborted(() => {
    res.aborted = true;
  });

  res.end();
});

// Prohibit Direct Access
app.get('/', (res, req) => {
  res.cork(() => {
    res.write('<html>');
    res.write('<h1>Prohited Access</h1>');
    res.end('</html>');
  });
})

// Use user management routes
userRoutes(app);

// Use authentication routes
authRoutes(app);

// Use authentication routes
masterRoutes(app);

operatorFuel(app)

// WebSocket route 
websocketRoute(app)

// Server Listener
app.listen('0.0.0.0', port, (token) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});
