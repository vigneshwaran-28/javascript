/*

Rest parameters
if i need to match different arguments into parameters inspite of focussing
on number of parameters then rest parameter is the best concept.

it is represented by ... and it should have that syntax only at the end of the parameter in functions

*/

function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");


  /*

Spread syntax
We’ve just seen how to get an array from the list of parameters.

But sometimes we need to do exactly the reverse.

For instance, there’s a built-in function Math.max that returns the greatest number from a list:

alert( Math.max(3, 5, 1) ); // 5

  */
let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN

let arr1 = [3, 5, 1];

alert( Math.max(...arr1) ); // 5 (spread turns array into a list of arguments)

/*
Rest parameter and spread operator
There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the 
list of arguments into an array.

When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into 
a list.Use patterns:

Rest parameters are used to create functions that accept any number of arguments.
The spread syntax is used to pass an array to functions that normally require a list of many arguments.

*/

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

/*

name – the function name. Usually taken from the function definition, but if there’s none, JavaScript 
tries to guess it from the context (e.g. an assignment).

length – the number of arguments in the function definition. Rest parameters are not counted.

In-browser, unless we’re using modules, global functions and variables declared with var become a 
property of the global object.

*/

/*

The "new Function" syntax
There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.

If you want to convert the string into function then this method is used

for example if u want to execute the string as a function which is from the server then this gives u
way to code

*/

let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3

let sayHi = new Function('alert("Hello")');

sayHi(); // Hello
/*
But new Function allows to turn any string into a function. For example, we can receive a new function 
from a server and then execute it:
*/
let str = "//... receive the code from a server dynamically ...";

let func1 = new Function(str);
func1();

/*

But when a function is created using new Function, its [[Environment]] is set to reference not the 
current Lexical Environment, but the global one.

So, such function doesn’t have access to outer variables, only to the global ones.

*/

/*
Scheduling
We may decide to execute a function not right now, but at a certain time later. That’s called 
“scheduling a call”.

There are two methods for it:

setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, then 
repeating continuously at that interval.

setTimeout
The syntax:

let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

*/

function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

/*

A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.

*/

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// repeat with the interval of 2 seconds
let timerId1 = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId1); alert('stop'); }, 5000);

/*

 bind
Functions provide a built-in method bind that allows to fix this.

The basic syntax is:

// more complex syntax will come a little later
let boundFunc = func.bind(context);
The result of func.bind(context) is a special function-like “exotic object”, that is callable as function and transparently passes the call to func setting this=context.

In other words, calling boundFunc is like func with fixed this.

For instance, here funcUser passes a call to func with this=user:

let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John

*/

let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};

/*

Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context this and first 
arguments if given.

Usually we apply bind to fix this for an object method, so that we can pass it somewhere. For example, to setTimeout.

When we fix some arguments of an existing function, the resulting (less universal) function is called partially applied 
or partial.

Partials are convenient when we don’t want to repeat the same argument over and over again. Like if we have a 
send(from, to) function, and from should always be the same for our task, we can get a partial and go on with it.

*/

/*

Arrow functions VS bind
There’s a subtle difference between an arrow function => and a regular function called with .bind(this):

.bind(this) creates a “bound version” of the function.
The arrow => doesn’t create any binding. The function simply doesn’t have this. The lookup of this is made exactly 
the same way as a regular variable search: in the outer lexical environment.

Arrow functions have no “this”
As we remember from the chapter Object methods, "this", arrow functions do not have this. If this is accessed, it is 
taken from the outside.

Arrow functions:

Do not have this
Do not have arguments
Can’t be called with new
They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance

*/