

const WebSocket = require('ws');
const clientHandler = require('./client-handler');
const shortID = require('./short-ID');


function startServer(sysConfig) {

    const host = sysConfig.svrHost;
    const port = sysConfig.svrPort;
    const wss = new WebSocket.Server({host:host,port:port});

    wss.on('connection', function (ws, req) {

        //const psudoID = shortID.getNextID();
        //相当于clientID
        const psudoID = ws._ultron.id;
        const ip = req.connection.remoteAddress;
        wsConn = {};
        wsConn.psudoID = psudoID;
        wsConn.ip = ip;
        wsConn.conn = ws;
        wsConn.createTime = new Date().toLocaleString();

        clientHandler.onConnection(wsConn);

        ws.on('message', function (msg) {
            clientHandler.onMessage(wsConn, msg);
        });

        ws.on('error', function (err) {
            clientHandler.onError(wsConn,err);
        });

        ws.on('close', function () {
            clientHandler.onClose(wsConn);
        });
    });
}

exports.startServer = startServer;
