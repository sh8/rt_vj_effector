// OSC Senderを立ち上げる
var oscsender = require('omgosc').UdpSender;
var sender = new oscsender("169.254.140.218", 7777);

var osc = require("osc"),
	http = require("http"),
	WebSocket = require("ws");

// Create an Express server app
// and serve up a directory of static files.
var app = require("express")(),
	server = app.listen(3100);

// app.use("/", express.static(__dirname + "/static"));

// Listen for Web Socket requests.
var wss = new WebSocket.Server({
	server: server
});

// Listen for Web Socket connections.
wss.on("connection", function (socket) {
	var socketPort = new osc.WebSocketPort({
		socket: socket
	});

	socketPort.on("message", function (oscMsg) {
		console.log("An OSC Message was received!", oscMsg);
		sender.send(oscMsg.address, 'i', [oscMsg.args[0]]);
	});
})
