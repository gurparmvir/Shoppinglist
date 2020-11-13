var button = document.getElementById("enter");
var button1 = document.getElementById("delete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementById("myList");  

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function delteListElement(){
	
	list.removeChild(list.firstElementChild);  
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

button1.addEventListener("click", delteListElement);
