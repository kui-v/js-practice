// testing removal of a DOM node / element
// node with id="toBeDeleted" will be deleted from DOM
//    on successful check of deletion, will replace
//    empty node with id="passedMsg" to PASSED
//    otherwise,the original node will be text changed to FAILED and removed

var removeEl = document.getElementById('toBeDeleted');
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

if (document.getElementById('toBeDeleted') != null) {
  removeEl.textContent = "FAILED";
  containerEl.removeChild(document.getElementByID('paddMsg'));
} else {
  document.getElementById('passMsg').textContent = "PASSED";
  
}