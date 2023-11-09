console.log("javascript page");


//semicolons purpose

alert('Hello')
alert('World')
//both alert are separate which is decided by line break

alert(3 +
    1
    + 2);
/*
It does not take line break because since aditional operator is there and the statement doesn't
end
*/

alert("Hello");   //without colon causes error
[1, 2].forEach(alert);



/*
use strict should be declared on the top and they use certain mechanism to work ie varibles 
should be declared before usage etc...
*/

function getNum(){
    "use strict";
    num=0;
}

// getNum();


/*
variables are used to store data in specific format

js variables are decared using 
    var,
    let,
    const

let and const has block level scope whereas var has global level scope , but in function it
lifetime is till the end of the function.


var:
var keyword is used to declare variables it is same as let but has some difference between 
them , it can also be used before declaration and can also be redeclared once again it won't
cause any error .


let:
let is a modern keyword it also used to declare variables in javascript , but it should not
be declared once again 


const:
const are the constatnt variables which are used to assign values to variables in a fixed 
format , if u don't want to reassign values to variables then const datatype is used 


*/


let user = 'John', age = 25, message = 'Hello';

const myBirthday = '18.04.1982';

var weather = "rainy";
weather = "sunny";


/*
data types

String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

BigInt has suffix n at end of the data 

undefined is assigned to a variable which is not initialized

null is same as undefined if the value is not known then it can have null or if it has no 
reference

object contains collections of data which is used to store in a variable 

*/


let n=Number(10);
console.log(typeof n);

/*

typeof function will return the type of the data whether it is of which type

*/


let demoNum=9n;
console.log(typeof demoNum);

const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(sym2);
console.log(sym3);

/*

Alert,prompt,confirm

Alert 
It shows the message in alert box and wait for user to press ok

prompt
It help us to get the input from the user in order to store certain values to the variables

confirm
It shows the dialog box whether it is ok or cancel if it is ok then it returns true else false


*/


let agePerson = prompt('How old are you?', 100);


let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed


/*

unary , binary ,operand


In unary if you are specifying the +opertor in string it converts the non number value to 
number value

*/

let varName1="5";
let varName2="3";

console.log(+varName1+ +varName2);


/*

All comparisons will return either true or false

*/


alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

/*

for math comparisons

null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

NaN can be compared to any other numbers but it will always return false because NaN is 
still Not a Number thus it can't be compared,

*/

alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

/*

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that 
they are called “falsy” values.

Other values become true, so they are called “truthy”.

conditional operator or ternary operator is used to execute statement based on the result of 
conditions it is same as if else , it can also be able to execute different set of conditions


*/


const conditionalOpertor=(9>8)?"Greater":"Smaller";

/*

Extra Features of || operator in js

Evaluates operands from left to right.

For each operand, converts it to boolean. If the result is true, stops and returns the 
original value of that operand.

If all operands have been evaluated (i.e. all were false), returns the last operand

*/

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( "ji" || 0 || 1 ); // ji (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

/*

And operator advanced features in js

Evaluates operands from left to right.

For each operand, converts it to a boolean. If the result is false, stops and returns the 
original value of that operand.

If all operands have been evaluated (i.e. all were truthy), returns the last operand.


*/

(x > 0) && alert( 'Greater than zero!' );

alert( !!"non-empty string" ); // true
alert( !!null ); // false


/*

Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless 
the precedence is explicitly specified with parentheses.

*/


/*

switch is used to overcome various if conditions in which the different cases are executed 
the cases are executed based on certain conditions where it deals with strict matching and the
flow of execution which encounters jumping statements

*/


/*

functions:
the parameters are the variables that are created during function declaration

arguments are the values that are passed to the parameters when function gets called

the parameters can have a default value when the argument is not passed to the parameter

*/

function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given


  /*

Function declaration
function declared as a separate statement

Function Expression
Function is created right side the assignment operator

  */


/*

Arrow functions
This creates a function func that accepts arguments arg1..argN, then evaluates the expression 
on the right side with their use and returns its result.

let func = (arg1, arg2, ..., argN) => expression;

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

*/





