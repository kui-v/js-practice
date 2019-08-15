var sayings = ["this is a test",
               "this is not a test",
               "is this a test",
               "is this not a test"];
var picked = Math.floor(Math.random() * 4);
var el = document.getElementById('random');
el.textContent = sayings[picked];