/*

The basic syntax is:

class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

*/

class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  user.sayHi();

  /*

  First, a function created by class is labelled by a special internal property [[IsClassConstructor]]
: true. So it’s not entirely the same as creating it manually.

The language checks for that property in a variety of places. For example, unlike a regular function, 
it must be called with new:

  */

class User {
    constructor() {}
  }
  
  alert(typeof User); // function
  User(); // Error: Class constructor User cannot be invoked without 'new'


  /*

  Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods 
  in the "prototype".

That’s good, because if we for..in over an object, we usually don’t want its class methods.

Classes always use strict. All code inside the class construct is automatically in strict mode.

Class Expression
Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

Here’s an example of a class expression:

let User = class {
  sayHi() {
    alert("Hello");
  }
};

Class Expression
Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

Here’s an example of a class expression:

let User = class {
  sayHi() {
    alert("Hello");
  }
};

  */

class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user1 = new User("John");
  alert(user1.name); // John
  
  user = new User(""); // Name is too short.

  /*

  Computed names […]
Here’s an example with a computed method name using brackets [...]:

class User {

  ['say' + 'Hi']() {
    alert("Hello");
  }

}

new User().sayHi();
Such features are easy to remember, as they resemble that of literal objects.


Making bound methods with class fields
As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It 
depends on the context of the call.

So if an object method is passed around and called in another context, this won’t be a reference to 
its object any more.

  */

class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // hello

  /*


Class inheritance
Class inheritance is a way for one class to extend another class.

So we can create new functionality on top of the existing.

The “extends” keyword
Let’s say we have class Animal:

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

Overriding a method
Now let’s move forward and override a method. By default, all methods that are not specified in class Rabbit are taken directly “as is” from class Animal.

But if we specify our own method in Rabbit, such as stop() then it will be used instead:

class Rabbit extends Animal {
  stop() {
    // ...now this will be used for rabbit.stop()
    // instead of stop() from class Animal
  }
}

Constructors in inheriting classes must call super(...), and (!) do it before using this.

  */

let animal = {
    name: "Animal",
    eat() {
      alert(`${this.name} eats.`);
    }
  };
  
  let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {
      // that's how super.eat() could presumably work
      this.__proto__.eat.call(this); // (*)
    }
  };
  
  rabbit.eat(); // Rabbit eats.

  /*

  When a function is specified as a class or object method, its [[HomeObject]] property becomes that 
object.

Then super uses it to resolve the parent prototype and its methods.

  */

let animal2= {
    name: "Animal",
    eat() {         // animal.eat.[[HomeObject]] == animal
      alert(`${this.name} eats.`);
    }
  };
  
  let rabbit2= {
    __proto__: animal2,
    name: "Rabbit",
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
      super.eat();
    }
  };
  
  let longEar = {
    __proto__: rabbit2,
    name: "Long Ear",
    eat() {         // longEar.eat.[[HomeObject]] == longEar
      super.eat();
    }
  };
  
  // works correctly
  longEar.eat();  // Long Ear eats.