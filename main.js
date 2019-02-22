var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	
	if(mySrc === bella4months.jpeg') {
		myImage.setAttribute('src', '/bella2months.jpg');
	} else {
		myImage.setAttribute('src', '/bella4months.jpeg');
	}

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + ', Meet my dog!';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + ', Meet my dog!';
}

myButton.onclick = function() {
	setUserName();
}
