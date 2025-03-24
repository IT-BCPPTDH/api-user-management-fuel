let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');

let PROTO_API_USER = __dirname + '/.proto/api-user.proto';
let packageApiUser = protoLoader.loadSync(
    PROTO_API_USER,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

let ApiUser = grpc.loadPackageDefinition(packageApiUser).api_user;


module.exports= ApiUser