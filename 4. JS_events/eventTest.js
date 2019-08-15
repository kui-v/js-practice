function checkValid(minLength) {
  var output = document.getElementById('output');
  var input = document.getElementById('textInput');
  
  if (input.value.length < minLength) {
    output.textContent = "Does not meet minimum length requirement.";
    console.log(document.getElementById('textInput').value);
  } else {
    output.textContent = input.value;
  }
}

// format for adding event listener
//  object.addEventListener('eventType', function() { fnName; }, false);
// this way allows for use of parameters
var button = document.getElementById('enterButton');
button.addEventListener('click', function() {
  checkValid(5);
}, false);