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
// accepting input from user using HTML input fields
let username;
document.getElementById('myButton').onclick=function(){
    username=document.getElementById("myName").value;
    document.getElementById('response').innerHTML="welcome "+username;
}