
/*

1-1000 // framework

1001-1200 // login server
1201-1300 // center server
1301-1400 // hall server
3000-10000 // game server

10000-20000 //client <-> server

//packet:{
//    "head":{
//          "mcmd":1,
//          "scmd:":1,
//          "remoteAddress":"127.0.0.1",
//          "seqNo":0
//     },
//   "body": {
//        //as your wish
//    }
//}

center server
//
// serverInfo:{
//      name
//      type
//      ip
//      port
//      activeTime
//      serverNo
//      ext
// }
*/

module.exports = {
    HEART_BEAT:1,

    LOGIN:1001,
    SUB_LOGIN_ACCOUNT:1,            //帐号登录
    SUB_LOGIN_PHONE:2,              //手机登录
    SUB_LOGIN_VISITOR:3,            //游客登录

    CENTER:1201,
    SUB_CENTER_UPDATE:1,            //向中央服务器上报状态
    SUB_CENTER_GET:2,               //从中央服务器获取对应的服务列表
    SUB_CENTER_PLAYER_OL:3,           //玩家登陆,玩家退出游戏也是这个状态
    SUB_CENTER_PLAYER_PL:4,           //玩家游戏中

    HALL:1301,
    SUB_HALL_GAME_LIST:1,           //游戏列表
    SUB_GAME_SERVER_LIST:2,         //游戏服务列表

    GAME:1401,
    SUB_GAME_CREATE_ROOM:1,         //创建房间
    SUB_GAME_ENTER_ROOM:2,          //进入房间
    SUB_GAME_LEAVE_ROOM:3,          //退出房间
    SUB_GAME_DISMISS_ROOM:4,        //解散房间
    SUB_GAME_DESK_SIT_DOWN:5,       //坐下
    SUB_GAME_DESK_READY:6,          //准备
    SUB_GAME_DESK_STAND_UP:7,       //起立
    SUB_GAME_DESK_OPE_CARD:8,       //操作牌
    SUB_GAME_DESK_WIN:9,            //胡牌
    SUB_GAME_REENTER_ROOM:10,       //断线重进房间
    SUB_GAME_QUERY_PLAYER_INFO:11,         //查询玩家游戏状态
    SUB_GAME_DESK_WATCH:12,          //观战
    SUB_GAME_KICK_PLAYER:1,           //房主踢人

    EVENT_OUT_CARD:1,
    EVENT_PASS_CARD:2,
};