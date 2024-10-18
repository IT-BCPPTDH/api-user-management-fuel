let grpc = require('@grpc/grpc-js');
const ApiUser = require('../config');
const { getUserByIdProto } = require('../controllers/smpController');

const server = new grpc.Server();
server.addService(ApiUser.Greeter.service,
  {
    getUserById: getUserByIdProto,
  });

server.bindAsync(process.env.grpcApiUser, grpc.ServerCredentials.createInsecure(), () => {
  console.log('grpc Api User run on '+ process.env.grpcApiUser )
  //server.register();
});