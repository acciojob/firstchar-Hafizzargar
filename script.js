function firstChar(text) {
  // your code here
	let z=text.trim(); 
	return z.charAt(0);
}

// Do not change the code below 

const text = prompt("Enter text:");
alert(firstChar(text));
