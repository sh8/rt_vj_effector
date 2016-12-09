// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var GameManagerInstance = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

	window.oscPort = new osc.WebSocketPort({
		url: "ws://localhost:3100"
	});
	oscPort.open();
	var sender = function() {
		let mergedValue = GameManagerInstance.mergedValue;
		console.log(mergedValue);
		oscPort.send({
			address: "/layer5/video/scale/values",
			args: mergedValue / 32.0
		});
		GameManagerInstance.mergedValue = 0;
	}
	setInterval(sender, 1000);
});
