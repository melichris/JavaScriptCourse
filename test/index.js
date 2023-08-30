// console.log("hello JavaScript");
// varaibles

// let fname="chris"
// let age=21
// console.log("hello "+name+". Your age is :"+age)

// document.getElementById('name').innerHTML="hello "+fname+" You are "+age+" year old."
// // operators
// let students=21
// students+=1
// console.log(students)
// // accepting data from user through windpw prompt
// let lname= window.prompt("what is your name ?")
// console.log("Your name is "+lname)
// document.getElementById('name').innerHTML="Your name is "+lname
// // accepting input from user using HTML input fields
// let username;
// document.getElementById('myButton').onclick=function(){
//     username=document.getElementById("myName").value;
//     document.getElementById('response').innerHTML="welcome "+username;
// }
// converting from one datatype to another
let age=window.prompt("how old are you?")
// use typeof to know the datatype of a vraible
console.log(typeof age)
age = Number(age)
console.log(typeof age)
age+=1

console.log(age)