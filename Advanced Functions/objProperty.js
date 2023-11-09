/*

Property flags
Object properties, besides a value, have three special attributes (so-called “flags”):

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise 
not.

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

*/

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  alert( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */

  /*

To change the flags, we can use Object.defineProperty.

The syntax is:

Object.defineProperty(obj, propertyName, descriptor)

If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.

For instance, here a property name is created with all falsy flags:

let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 

  */


/*
Object.defineProperties
There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

The syntax is:

Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
For instance:

Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});


Object.getOwnPropertyDescriptors
To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).

Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
Normally when we clone an object, we use an assignment to copy properties, like this:

for (let key in user) {
  clone[key] = user[key]
}

*/

/*

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

*/