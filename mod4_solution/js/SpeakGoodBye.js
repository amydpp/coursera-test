(function (name) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function () {
		console.log(speakWord + " " + name);
	}

	name.byeSpeaker = byeSpeaker;

	
})(name);
