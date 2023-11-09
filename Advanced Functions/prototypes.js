/*

Prototypal inheritance
In programming, we often want to take something and extend it.

For instance, we have a user object with its properties and methods, and want to make admin and guest 
as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its 
methods, just build a new object on top of it.

Prototypal inheritance is a language feature that helps in that.

When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.

The property [[Prototype]] is internal and hidden, but there are many ways to set it.

One of them is to use the special name __proto__, like this:

*/

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // we can find both properties in rabbit now:
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true

  /*

  Writing doesn’t use prototype
The prototype is only used for reading properties.

Write/delete operations work directly with the object.

In the example below, we assign its own walk method to rabbit:

let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit 
}
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.

We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered
soon).

The object referenced by [[Prototype]] is called a “prototype”.

If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries 
to find it in the prototype.

Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a 
data property, not a setter).

If we call obj.method(), and the method is taken from the prototype, this still references obj. So 
methods always work with the current object even if they are inherited.

The for..in loop iterates over both its own and its inherited properties. All other key/value-getting 
methods only operate on the object itself.

  */

/*

Native prototypes
The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor 
functions use it.

*/

String.prototype.show = function() {
    alert(this);
  };
  
  "BOOM!".show(); // BOOM!

  /*

  Summary

  All built-in objects follow the same pattern:

  The methods are stored in the prototype (Array.prototype, Object.prototype, Date.prototype, etc.)

  The object itself stores only the data (array items, object properties, the date)

  Primitives also store methods in prototypes of wrapper objects: Number.prototype, String.prototype 
  and Boolean.prototype. Only undefined and null do not have wrapper objects

  Built-in prototypes can be modified or populated with new methods. But it’s not recommended to 
  change them. The only allowable case is probably when we add-in a new standard, but it’s not yet 
  supported by the JavaScript engine

  */

  /*

  F.prototype
Remember, new objects can be created with a constructor function, like new F().

If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object.



  */

let animal1 = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal1;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true

/*

Default F.prototype, constructor property
Every function has the "prototype" property even if we don’t supply it.

The default "prototype" is an object with the only property constructor that points back to the function itself.

Like this:

function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };


The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when 
new F() is called.

The value of F.prototype should be either an object or null: other values won’t work.

The "prototype" property only has such a special effect when set on a constructor function, and 
invoked with new.

*/



/*

without proto

The modern methods to get/set a prototype are:

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

Although, there’s a special method for this too:

Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and 
optional property descriptors.

*/

let animal3 = {
  eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal3); // same as {__proto__: animal}

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal3); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}



let animal4 = {
  eats: true
};

let rabbit = Object.create(animal4, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true

/*

We can use Object.create to perform an object cloning more powerful than copying properties in 
for..in:

*/

let clone = Object.create(
  Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
);

