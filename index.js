// server.js
const uWS = require('uWebSockets.js');
const userRoutes = require('./routes/user-routes');
const authRoutes = require('./routes/auth-routes');
const websocketRoute = require('./routes/websocket-route')

const port = 9001;
const app = uWS.App();

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

// WebSocket route 
websocketRoute(app)

// Server Listener
app.listen(port, (token) => {
  if (token) {
    console.log('Listening to port ' + port);
  } else {
    console.log('Failed to listen to port ' + port);
  }
});
