//global variables

let string;

let alphabetObject = {A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0,
	N: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0}

let completeScrabbleObject = {A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
	N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1}

//first function prompts the user for string input based on what they got from an image parser

function getUserInput() {
	string = window.prompt("Hello! please enter the tile letters you have. It is recommended that you use an image to text program and paste its output string here")
	return sanitizeString(string);
}


//next function takes the string user gave and sanitizes the string, converting commmon mis-translations and eliminating noise might be useful. 

function sanitizeString (string) {
	string = string.replace(/[,. ]/g, "")   //image parsers tend to return man punctuation and spaces and these can be removed. 
	string = string.replace(/[1l]/g, "I")   //corrects for common mistranslations of "I"
	string = string.replace(/0/g, "O")      //corrects for common mistranslations of "O"
	array = string.split("").map((letter) => {
	    if (letter.charCodeAt(0) === 913) {       //corrects for common mistranslations of "A"
	        letter = "A";
	        return letter;
	    }
	    else if (letter.charCodeAt(0) === 914) {  //corrects for common mistranslations of "B"
	    	letter = "B";
	    	return letter;
	    }
	    else {return letter}
	})
	string = array.join("")
	return stringToObject(string);
} 



//next function takes a sanitized string input and converts it to an object of key value/pairs: e.g. {a: 9, b:2, ...}

function stringToObject (string) {
	let lettersArray = string.split("")
	lettersArray.forEach((key) => {
		if (alphabetObject.hasOwnProperty(key.toUpperCase())) {
			alphabetObject[key.toUpperCase()] += 1;
		}
	})
	return validateScrabble(alphabetObject);
}

//next function iterates over the keys/values of alphabetObject and subtracts the values of the completeScrabbleObject

function validateScrabble (alphabetObject) {
	Object.keys(alphabetObject).forEach((key) => {
		alphabetObject[key] -= completeScrabbleObject[key]
	})
	return isValidScrabbleSet(alphabetObject);
}

//final function takes the alphabetObject from validateScrabble function and identifies any extra/missing tiles or returns a message that set is complete
function isValidScrabbleSet (alphabetObject) {
	let message = "";
	Object.keys(alphabetObject).forEach((key) => {
		if (alphabetObject[key] > 0) {
			message += `${alphabetObject[key]} extra ${key} (should have ${completeScrabbleObject[key]}) ` 
		}
		else if (alphabetObject[key] < 0) {
			message += `${Math.abs(alphabetObject[key])} missing ${key} (should have ${completeScrabbleObject[key]}) ` 
		}
	})
	let returnMessage;
	message === "" ? returnMessage = "Your Set is Complete!" : returnMessage = message  //final return message is either a validation of complete set or identification of missing/extra tiles
	window.alert(returnMessage);
	return null;
}

/* all functions tested and seem to work. Need to build in edge cases. Last function should probably
take a different variable than alphabetObject since this would return as complete if it was passed
in when first defined. */