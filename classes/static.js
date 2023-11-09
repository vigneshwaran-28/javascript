/*

Static properties and methods
We can also assign a method to the class as a whole. Such methods are called static.

In a class declaration, they are prepended by static keyword, like this:

Static properties are used when we’d like to store class-level data, also not bound to an instance.

*/

class User {
    static staticMethod() {
      alert(this === User);
    }
  }
  
  User.staticMethod(); // true


  /*

  Internal and external interface
In object-oriented programming, properties and methods are split into two groups:

Internal interface – methods and properties, accessible from other methods of the class, but not from 
the outside.

External interface – methods and properties, accessible also from outside the class.

In JavaScript, there are two types of object fields (properties and methods):

Public: accessible from anywhere. They comprise the external interface. Until now we were only 
using public properties and methods.

Private: accessible only from inside the class. These are for the internal interface.

Protected properties are usually prefixed with an underscore _

  */

class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
  
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10

  /*

  Private “#waterLimit”
A recent addition

This is a recent addition to the language. Not supported in JavaScript engines, or supported partially
yet, requires polyfilling.

There’s a finished JavaScript proposal, almost in the standard, that provides language-level support 
for private properties and methods.

Privates should start with #. They are only accessible from inside the class.

  */

class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
  coffeeMachine.#fixWaterAmount(123); // Error
  coffeeMachine.#waterLimit = 1000; // Error

  /*

  Private fields do not conflict with public ones. We can have both private #waterAmount and public 
  waterAmount fields at the same time.

  */

  /*

  Extending built-in classes
Built-in classes like Array, Map and others are extendable also.

For instance, here PowerArray inherits from the native Array:

// add one more method to it (can do more)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false

  */


/*

Class checking: "instanceof"
The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.

Such a check may be necessary in many cases. For example, it can be used for building a polymorphic function, the one that treats arguments differently depending on their type.

The instanceof operator
The syntax is:

obj instanceof Class

As we can see, {}.toString is technically a “more advanced” typeof.

And instanceof operator really shines when we are working with a class hierarchy and want to check 
for the class taking into account inheritance.

A mixin example
The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that 
we can easily merge them into a prototype of any class.

For instance here the mixin sayHiMixin is used to add some “speech” for User:

*/

// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!


/*

Mixin – is a generic object-oriented programming term: a class that contains methods for other classes.

Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, 
but mixins can be implemented by copying methods into prototype.

We can use mixins as a way to augment a class by adding multiple behaviors, like event-handling as 
we have seen above.

Mixins may become a point of conflict if they accidentally overwrite existing class methods. 
So generally one should think well about the naming methods of a mixin, to minimize the probability 
of that happening.

*/