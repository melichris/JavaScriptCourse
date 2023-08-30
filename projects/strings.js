// Complete the function getCharCount such that it returns the number of characters in the str parameter that it receives.
function getCharCount(str) {
  return str.length;
}
console.log(getCharCount("christian"));

// Complete the function shoutMyName such that it returns the name parameter it receives all in upper case
function shoutMyName(name) {
  return name.toUpperCase();
}

// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"
console.log(shoutMyName("Charley")); // "CHARLEY"
console.log(shoutMyName("alex")); // "ALEX"

// Complete the function lowerName such that it returns the name parameter it receives all in lower case.
function lowerName(name) {
  return name.toLowerCase();
}

// Sample usage - do not modify
console.log(lowerName("Sam")); // "sam"
console.log(lowerName("ALEX")); // "a

// Complete the function getFirstCharacter such that it returns the first character of the name parameter it receives
function getFirstCharacter(name) {
  return name[0];
}

// Sample usage - do not modify
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// Complete the function getLastCharacter such that it returns the last character of the name parameter it receives.
function getLastCharacter(name) {
  return name[name.length - 1];
}

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

// Complete the function skipFirstCharacter such that it returns all the characters except the first one from the text parameter it receives.
function skipFirstCharacter(text) {
  return text.substring(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
