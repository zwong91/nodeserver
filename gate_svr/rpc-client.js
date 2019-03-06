// proto文件路径
var PROTO_PATH = __dirname + '/proto/helloworld.proto';
//var test_PATH = __dirname + '/proto/test.proto';
// 加载grpc模块
var grpc = require('grpc');
// 加载包配置
var hello_proto = grpc.load(PROTO_PATH).helloworld;
//var test_proto = grpc.load(test_PATH).test;
// 主函数
function main() {
   // 创建2个客户端
  var client = new hello_proto.Greeter('localhost:50051',grpc.credentials.createInsecure());
  //var test = new test_proto.Waiter('127.0.0.1:8028',grpc.credentials.createInsecure());
  // 定义请求参数 使用附带参数如果有 如: node client.js 123
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'fuck whole world';
  }
  // 调用接口方法
  client.sayHello({name: user}, function(err, response) {
    console.log('sayHello服务端返回: ', response.message);
  });
  // 调用接口方法
//   test.DoMax({ReqStr: user}, function(err, response) {
//     console.log('DoMax服务端返回: ', response.ResStr);
//   })
}

main();
