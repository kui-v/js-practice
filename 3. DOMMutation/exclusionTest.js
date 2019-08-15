// by referencing an element node as a var, able to call DOM functions
// on specific node.
// ex below: 4 li elem, where 3 are contained in section id="focus"
// document.getElementsByTagName('li') returns 4 instances
// focusSection.getElementsByTagName('li') returns 3 instances
//    those 3 instances that are found in the section


var focusSection = document.getElementById('focus');
console.log(focusSection.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li'));

// calling DOM siblings
// note in chromium: whitespace after doms
//    result when init calling sibling is a null node
//    bypass by avoiding, use JQUERY, or just call
//    sinbling function twice like below
var middleEl = document.getElementById('middle');
var prevWhitespace = middleEl.previousSibling;
var nextWhitespace = middleEl.nextSibling;

console.log(prevWhitespace.previousSibling);
console.log(nextWhitespace.nextSibling);


// calling nodes of a DOM  element
//    innerHTML node is entirety of string, including tags
//    textContent node is just the text elements, minus tags
var moreEl = document.getElementById('moreElements');
console.log(moreEl.innerHTML);
console.log(moreEl.textContent);