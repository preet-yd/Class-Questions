
// Node.js program to demonstrate 
// the fs.readFile() method 

// Include fs module 
var fs = require('fs'); 

// Use fs.readFile() method to read the file 
fs.readFile('textFile.txt', 'utf8', (error,data) =>{ 
	
	// Display the file content 
	console.log( `data is ${data} `); 
    console.log( `err is ${error} `); 
}); 

console.log('readFile called'); 
