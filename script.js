function firstChar(text) {
  // your code here
	let z="";
	let n=text.length;
	if(n==0){
		return z;
	}
	for(int i=0;i<n;i++){
		if(text[i]!=" "){
			z=z+text[i];
		}
	}
	return z[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text);
