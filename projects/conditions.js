//let us check how === is different from ==
function check1(){
    return "2"==2;
}
function check2() {
    return "2"===2;
}
function check3() {
    return 2===2;
}
function check4() {
    return 2==2;
}
//on the result, you can see that the one with == returns true, which is not correct.
// the correct answer is check3 because it checks the exact values and their data types.
console.log(check1());
console.log(check2());
console.log(check3());
console.log(check4());

/*
Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
Note that the age is provided by the user.
However, when the ageis empty, the function returns NaN. We need to fix that and make it show 0 instead of NaN.
 */
function getNextAge(age) {
    if(age===""){
        return 0;
    }
    return Number.parseInt(age,10)+1;
}
/*
Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...
If the text is 10 characters or less, the ellipsis should not be added because the text is not being trimmed!
 */
function getDescription(text) {
    if(text.length<=10){
        return text;
    }
    return `${text.substring(0,10)}...`;
}
console.log(getDescription("Hello Guys, how are you today"));
console.log(getDescription("JavaScript"));

//Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise..
function evenOrOdd(n) {
    if(n%2===0)
        return "even";
    return "odd";
}
console.log(evenOrOdd(6));
//using switch case to determine gender and return true if the gender is male or false otherwise. use the first
// initials of the gender
function findGender(gender) {
    let initials = gender.charAt(0).toLowerCase();
    switch (initials) {
        case "m":
            return true;
            break;
        case "f":
            return false;;
            break;
        default:
            return "Unknown Gender";
            break;
    }
}
console.log(findGender("fog"))