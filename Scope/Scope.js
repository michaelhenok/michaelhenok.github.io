 //  1. 
 let grapes = "green"; // the grape variable is globaly declared so its going to be visible in the function

 function fruits() {  // the fruits function is returning a innner funciton

     return function (message) {

         return grapes;  // the value of the grape will be returned which is green

     }
 }
 console.log(fruits()());//by doing two brackets we are calling the second function thats why the result will be green


 // 2. 
 let x = 10; //the variable is declared globaly because its declared outside
 function globalVar() { //globalVar fun is created and its returning a function which returns x

     return function () {

         return x; //x is declared out side on global

     }

 }

 x = 20; //x is reassigned because its visible here

 let fn = globalVar(); //the inner funciton is assigned in fn

 console.log(fn()); //fn function will return x which is 20


 //  3. 
 function sport(message) {

     message = "Hi"; //parameter of the sport function is assigned to hi

     return function (message) {  //this line is returning a function with a parameter of message which different from the top message variable

         return message;

     }

 }

 let sportFn = sport("Hello World"); //the function to be returned is assigned in sportfn and message parameter is given

 console.log(sportFn()); //this will be undefined because sportfn should have a parameter


 // 4. 
 function test(x) { //test function with x variable

     x = 10; //x is reassined to 10 what ever passed to the parameter it will be ten

     x++; //x is post incremented

     return function () {

         return x++; // x is 11 from the previous increment and this lines increment will not be executed in this line

     }

 }

 console.log(test(2)()) // the result will be 11 because of the above reasons
 // 5.
 function car() {

     let color = "white";

     function seat() { //this will be a private because it is hidden in car function

         let color = "brown";
         console.log(color)//___________color will be brown because its declared in seat fun

     }
     console.log(color)//___________color will be white because it is not affected by seat color

 }

 car("black")// this will return white black is ignored because the function doesnt have parameter
 // 6. 
 function department() {

     let numberOfDepartments = 5;
     console.log(numberOfDepartments);//the out put will be 5 because its declated above
     function software() {

         let language = "javascript"; //this language will only be visible in software
         console.log(language)

     }

     console.log(language) //this will be reference error because its not declared in department

 }

 department() //5 and reference error


 // 7. 
 function department(language) {

     let numberOfDepartments = 5;
     console.log(numberOfDepartments)//this will be five 
     function software() {

         let language = "javascript"; //language is assigned in software so its not visible outside
         console.log(language);//this will be javascript if the method is invoked

     }

     console.log(language) //this will be parameter of the department

 }

  department("java"); //the result will be java