// create vars for all elements to be accessed
var elList, elCounter, elInput, elSubmit;

elList = document.getElementById('itemList');
elCounter = document.getElementById('counter');
elInput = document.getElementById('listInput');
elSubmit = document.getElementById('listEnterButton')

// create vars to be used in new calculations/mutations
var newEl, newText, listItems;

// function called on addition of new list item
// creates element <li> to be placed within itemList <ul>
function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode(elInput.value);
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

// function updates counter of how many items in list 
function updateCounter() {
    listItems = list.getElementsByTagName('li').length;
}

// eventListeners
elSubmit.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCounter, false);