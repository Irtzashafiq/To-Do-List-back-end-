// Let Variable

// *let variable have a block scope it means it cannot be redeclared inside that scope again so it must be declared before use and also cannot reassign the value to the same variable 
// {
//     let a = 6;
//     // let a = 1; // in this case we are redeclaring the a in the scope so it throws an error
// }

// let a = 10;
// {
//     let a = 1;
    
// }
// console.log(a) // when we print this variable outside the scope we can see it prints 10 not 1 which we redeclare after in different scope

//let variables are not hoisted as when we try to use them before declaration it shows the reference error

// carName = "Saab";
// let carName = "Volvo";// it throws a reference error of not accessing the variable before initilization

//___________________________________________________________________________________________________________________________________

// var Variable
// we can say that it is a global variable as we can access it outside the scope and it can be redeclared and reassign it 

// var a = 10;

// {
//     var a = 5;
// }
// console.log(a) // it prints the value a which is declared after as we are redeclaring it in different scope too.

//variable are hoisted we can use them before declaring the variable

// carname  = "lexus";
// var carname;
// console.log(carname)

//___________________________________________________________________________________________________________________________________

// Const Variable
//const variables cannot be redefined cannot be reassigned 
// In javascript const value must be assigned a value when they are declared

// const PI = 3.14159265359;

//Const are not hoisted 
// const PI;
// PI = 3.14159265359;// It also throws a syntax error due to missing initilizer
//Always declare a variable with const when you know that the value should not be changed.

//It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

// const array = ["Honda" , " Suzuki" , "Lexus"]

// you can change the elements like

// array[1] = "Audi"
// console.log(array)

//you can also add a new element in the constant array like

// array.push("VolksWagon")
// console.log(array)

//but you cannot reasssign the const array like 

// const car = ["Honda" , " Suzuki" , "Lexus"]

// car = ["Audi", "Honda" , "Volvo"] //it throws a type error 

// suppose we have a constant object having different properties

// const car = {
//     model :  "Honda",
//     make : "civic",
//     year : "2021"

// }

// car.make = "city"
// console.log(car) // we can simple change the properties of a constant object but we cannot reassign the object completely

// car = {
//     model :  "Audi",
//     make : "A4",
//     year : "2022"
// }
// console.log(car)// It thows a type error as we cannot reassign the whole constant object

