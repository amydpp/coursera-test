(function (window) {
  var sillyNames = {};
  sillyNames.name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


 window.sillyNames = sillyNames;
  }) (window);



for (var i = 0; i < sillyNames.name.length -1; i++){
console.log(helloSpeaker.speak(sillyNames.name[i]));

};


for (var i = 0; i < sillyNames.name.length -1; i++){

console.log(byeSpeaker.speak(sillyNames.name[i]));



};

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();
