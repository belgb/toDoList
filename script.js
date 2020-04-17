var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length
}

function listLength() {
    return li.length;
}

function createListElement() {
	var li = document.createElement("li");
    var deleteButton = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);
    deleteButton.onclick=removeParent;	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
	} 
}

function createDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    li[i].appendChild(deleteButton);
    deleteButton.onclick=removeParent;
}

function doneByClick(event) {
    var target=event.target;
    target.classList.toggle("done");
}

function removeParent(event) {
    event.target.parentNode.remove();
}

for (i=0; i<listLength();i++) {
    createDeleteButton();
}

button.addEventListener("click",addListAfterClick); 
input.addEventListener("keypress",addListAfterKeyPress);
ul.addEventListener("click", doneByClick);