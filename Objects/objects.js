console.log("objects");

let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  console.log(user.name);

  /*

object key can be given from the user using prompt function

for in loop is used to iterate over object

In order to check the specific key in an object we can use this function

  */

console.log("name" in user);
var count=1;
for(key in user){
  console.log("user : "+(count++)+" = "+key+" : "+user[key]);
}

/*

when one variable is assignes to another variable it copies the value to it

In case of object the reference holds the memory location of the object

if the reference assigned to another variable it doesn't create duplicate object rather it 
points to the same object , changes are affected if the changes are made in values

*/

var user3=user;
user3.name="vignesh"
console.log(user);


/*

Objects.assign function is used to assign the object reference to another reference 

*/

let user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

// let clone = Object.assign({}, user);
clone={};
Object.assign(clone, user4);

console.log( user4.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user4.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 60, get the result from the other one


/*

structuredClone(reference)
It clones the object with all the properties it has changes are not affected beacuse both are 
separate objects

*/

/*

Garbage Collections
Unreachable objects are taken care by gc which helps to manage memory in js the reference become
null or it doesn't points to the objects,simply the objects without reference are taken care
by gc


delete keyword used to delete the properties in the object which will create the unreachable 
objects

*/

console.log(clone);
delete clone.sizes;
console.log(clone);

/*

This keyword is used to refer the current object 

*/
let Exuser = {
  name: "John",
  age: 30,

  sayHi() {
    // alert( Exuser.name ); // leads to an error
  }

};


let admin = Exuser;
Exuser = null; // overwrite to make things obvious

admin.sayHi(); // TypeError: Cannot read property 'name' of null

/*

The regular {...} syntax allows us to create one object. But often we need to create many 
similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.

Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.


*/

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let conUser = new User("Jack");

alert(conUser.name); // Jack
alert(conUser.isAdmin); // false

/*

Inside a function, we can check whether it was called with new or without it, using a special 
new.target property.

*/
function User2(name) {
  if (!new.target) { // if you run me without new
    return new User2(name); // ...I will add new for you
  }

  this.name = name;
}

let john = User2("John"); // redirects call to new User
alert(john.name); // John

/*

The optional chaining ?. 
The optional chaining ?. is a safe way to access nested object properties, even if an 
intermediate property doesn’t exist.

If it not exists then it returns the undefined

syntax has three forms:

obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined

*/


let optChain= {}; // a user without "address" property

console.log(optChain?.address); // Error!

/*

Symbol
A “symbol” represents a unique identifier.

A value of this type can be created using Symbol():

let id = Symbol();

if id is passed in alert it won't works it has to convert to toString in order to work with it

symbol.description property to show the description only:

*/


let id = Symbol("id");
alert(id.description); // id
/*
Symbols allow us to create “hidden” properties of an object, that no other part of code 
can accidentally access or overwrite.

For instance, if we’re working with user objects, that belong to a third-party code. We’d 
like to add identifiers to them.

Let’s use a symbol key for it:
*/
let userSym = { // belongs to another code
  name: "John"
};

let id1 = Symbol("id");

userSym[id1] = 1;

alert( userSym[id1] ); // we can access the data using the symbol as the key

/*

As we’ve seen, usually all symbols are different, even if they have the same name. But 
sometimes we want same-named symbols to be same entities. For instance, different parts of 
our application want to access symbol "id" meaning exactly the same property.

*/

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

alert(user.valueOf());


