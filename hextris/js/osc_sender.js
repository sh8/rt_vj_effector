window.oldScore = 0;
window.oscPort = new osc.WebSocketPort({
	url: "ws://localhost:3100"
});
oscPort.open();
var sender = function() {
	window.diffScore = window.score - window.oldScore;
	window.oldScore = window.score;
	if(window.diffScore >= 0) {
		console.log("diffScore is " + diffScore);
		oscPort.send({
			address: "/",
			args: window.diffScore / 50.0
		});
	}
}
setInterval(sender, 1500);
