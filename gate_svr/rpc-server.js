// 定义proto接口描述文件路径
var PROTO_PATH = __dirname + '/proto/helloworld.proto';
// 加载grpc模块
var grpc = require('grpc');
// 加载proto文件中helloworld包的配置
var hello_proto = grpc.load(PROTO_PATH).helloworld;
// 定义sayHello方法
function sayHello(call, callback) {
  console.log('sayHello服务端收到: ', call.request.name);
  callback(null, {message: 'Node.js: ' + call.request.name});
}
// 主函数
function main() {
  // 实例grpc服务
  var server = new grpc.Server();
  // 注册Greeter服务到grpc服务，并定义接口对应方法
  server.addService(hello_proto.Greeter.service, {sayHello: sayHello});
  // 绑定地址，并传入证书(这里是忽略验证)
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
 // 启动服务
  server.start();
}

main();