/*

If you want to embed any expression to the string then we can go for back ticks

Another advantage of using backticks is that they allow a string to span multiple lines:

*/

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

/*

We can also iterate over characters using for..of:

It uses to iterate every character in a string

Strings can’t be changed in JavaScript. It is impossible to change a character.

1}IndexOf
The first method is str.indexOf(substr, pos).

It looks for the substr in str, starting from the given position pos, and returns the position
where the match was found or -1 if nothing can be found.


2}There is also a similar method str.lastIndexOf(substr, position) that searches from the end 
of a string to its beginning.

It would list the occurrences in the reverse order.

*/

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

/*

The optional second argument of str.includes is the position to start searching from
The methods str.startsWith and str.endsWith do exactly what they say

There are 3 methods in JavaScript to get a substring: substring, substr and slice.

Returns the part of the string from start to (but not including) end.
Negative values for start/end are also possible. They mean the position is counted from the 
string end

*/

let str1 = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str1.slice(-4, -1) ); // 'gif'


/*
str.substring(start [, end])
Returns the part of the string between start and end (not including end).

This is almost the same as slice, but it allows start to be greater than end (in this case it 
simply swaps start and end values).

str.substr(start [, length])
Returns the part of the string from start, with the given length.

In contrast with the previous methods, this one allows us to specify the length instead of the ending position:

*/


let str2 = "stringify";
alert( str2.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

/*
Arrays
If the data is need to be stored in order then we may go for array

push-add the element end to an array
pop-remove the element from the end of an array like stack
shift-used to remove the first element from array
unshift-used to add element at the begining

Arrays are copied by reference

delete keyword are used to delete the specific element from the array rather it also clears the
element but it won't decrease the size

*/

let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]
delete arr[0];
arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return


/*

splice
arr.splice(start[, deleteCount, elem1, ..., elemN])

It modifies arr starting from the index start: removes deleteCount elements and then inserts 
elem1, ..., elemN at their place. Returns the array of removed elements.

*/

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

/*

slice
It returns a new array copying to it all items from index start to end (not including end). 
Both start and end can be negative, in that case position from array end is assumed.

*/

let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

let arr = [1, 2];

//It doesn't add separate values of keys to array

// let arrayLike = {
//   0: "something",
//   length: 1
// };

// alert( arr.concat(arrayLike) ); // 1,2,[object Object]

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });


  /*

  To sort an array
  arr.sort(function(a, b) { return a - b; });

  Split and join in array

  The str.split(delim) method does exactly that. It splits the string into an array by the 
  given delimiter delim.
  
  let names = 'Bilbo, Gandalf, Nazgul';

  let arr = names.split(', ');

  Reduce and reduceRight used to iterate loops 

  Reduce-from left to right
  Reduce right-from right to left

  */
  let str3= "Hello";

  // does the same as
  // for (let char of str) alert(char);
  
  let iterator = str3[Symbol.iterator]();
  
  while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // outputs characters one by one
  }

  /*

  Array.from
  There’s a universal method Array.from that takes an iterable or array-like value and makes 
  a “real” Array from it. Then we can call array methods on it.

  */
  let arrayLike1 = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike1); // (*)
  alert(arr.pop()); // World (method works)

  /*

  Map
  Map is a collection of keyed data items, just like an Object. But the main difference is 
  that Map allows keys of any type.

  new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

How Map compares keys
To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as 
strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be 
used as the key as well.

For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

If we have a plain object, and we’d like to create a Map from it, then we can use built-in 
method Object.entries(obj) that returns an array of key/value pairs for an object exactly in 
that format.

  */
 
let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  alert( map.get('name') ); // John

  /*

  There’s Object.fromEntries method that does the reverse: given an array of [key, value] 
  pairs, it creates an object from them:

  */
 let map1 = new Map();
map1.set('banana', 1);
map1.set('orange', 2);
map1.set('meat', 4);

let obj1 = Object.fromEntries(map1.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj1.orange); // 2

/*

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

*/

/*

WeakMap
The first difference between Map and WeakMap is that keys must be objects, not primitive 
values

when the reference of another object  is used as key and that reference become null it will
be affected on that map too . To overcome that we go for weakmap

Caching:
Another common example is caching. We can store (“cache”) results from a function, so that 
future calls on the same object can reuse it.

*/

let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;

let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

/*

For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.

*/

let user = {
    name: "John",
    age: 30
  };
  
  // loop over values
  for (let value of Object.values(user)) {
    alert(value); // John, then 30
  }

  /*

  Destructuring assignment
The two most used data structures in JavaScript are Object and Array.

Objects allow us to create a single entity that stores data items by key.
Arrays allow us to gather data items into an ordered list.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects 
into a bunch of variables, as sometimes that’s more convenient.

  */
 // we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith


/*

To create a new Date object call new Date() with one of the following arguments:

new Date()
Without arguments – create a Date object for the current date and time:

*/


let now = new Date();
alert( now ); // shows current date/time

/*

Date.parse from a string
The method Date.parse(str) can read a date from a string.

The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

*/

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)

/*

Json
JSON methods, toJSON
Let’s say we have a complex object, and we’d like to convert it into a string, to send it 
over a network, or just to output it for logging purposes.

Json.stringify
it gives error if you are using circular references 

JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

Function properties (methods).
Symbolic keys and values.
Properties that store undefined.
*/

// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

/*

The full syntax of JSON.stringify is:

let json = JSON.stringify(value[, replacer, space])
value
A value to encode.
replacer
Array of properties to encode or a mapping function function(key, value).
space
Amount of space to use for formatting

JSON is a data format that has its own independent standard and libraries for most programming languages.
JSON supports plain objects, arrays, strings, numbers, booleans, and null.
JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
Both methods support transformer functions for smart reading/writing.
If an object has toJSON, then it is called by JSON.stringify.

*/



