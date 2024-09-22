// variables in javascript:

// when we need to define some value in javascript we use variables. "A variable is a word that refer to the particular value",
// when we create varibale it holds some space in memeory and store the vlaue in that allocated space..

// We define variable using keywords "var", "let", "const"
//is th number enclosed in qoutation is not a number javascript treats a string

// data types:  - strign (name of any thing store as stirng using qoutations "" '')
//              - Boolean ( true or false)
//              - Numbers ( javascript treat aany type of mathematical value in number like decimal, float etc )
//              - undefined (value of variable dosenot defined)
//              - Null (value is defined but empty use NUll keyword or "")


/// rules to define variables: - variable name cannot any keyword using in javascript
//                             - variable names cannot contain any spaces
//                             - variable name can only be letters , numbers, dollar sign and underscore
//                             - case sensitive (means Rose isnot rose, there are difference b/w R and r)


// Var: - var is a function scoped(access with in function anywhere)
//      - var can be redefined or redecleared same variable
//      - use to assign any type of value

var a = 1; var 
b ="string"; 
var c = true;  
var d  // undefined
var e = null //null
console.log(d, e)
console.log(c)// output : true
var c = false // redefinning using keyword
console.log(c)// output : false


//let : - new in ES6
//      - Value can be change or reassign
//      - Cannot redefined or redecleared same variable (major difference between var and let)
//      - Block scope (cannot access outside the block of code )
//      - can be assign any type of value


let num = 1;
let strings = "string";
let bool = true
console.log(c) // true

// let bool = false
// console.log(c) // error  because cannot redefined


//const:- new in ES6 like let but for constant values
//      - Value cannot be change once it assigned
//      - Cannot redefined or redecleared same variable (major difference between var and let)
//      - Block scope (cannot access outside the block of code )


const numb = 2
console.log(numb) //output 2
numb = 3 
console.log(numb) // error because of constant value
const str = "hello"
const bol_val = true
const null_val = null