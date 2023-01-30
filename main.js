// initialize the count as 0
let count = 0;

// updates the counter each time the button is clicked 
function clickCount() {
	count = count + 1;

	let newText = "Number of times button clicked: " + count;

	// select the element
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;
}