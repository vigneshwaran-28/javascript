/*

Error handling, "try...catch"
But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, 
instead of dying, do something more reasonable.

*/

try {

    alert('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    alert('End of try (never reached)');  // (2)
  
  } catch (err) {
  
    alert(`Error has occurred!`); // (3) <--
  
  }

  /*

  try...catch only works for runtime errors
For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:

try...catch works synchronously
If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:

try {
  setTimeout(function() {
    noSuchVariable; // script will die here
  }, 1000);
} catch (err) {
  alert( "won't work" );
}

  */

setTimeout(function() {
    try {
      noSuchVariable; // try...catch handles the error!
    } catch {
      alert( "error is caught here!" );
    }
  }, 1000)

  /*

For all built-in errors, the error object has two main properties:

name
Error name. For instance, for an undefined variable that’s "ReferenceError".
message
Textual message about error details.
There are other non-standard properties available in most environments. One of most widely used and 
supported is:

stack
Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.
For instance:

try {
  lalala; // error, variable is not defined!
} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined
}

  */

let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}

/*

Rethrowing is a very important pattern of error handling: a catch block usually expects and knows how 
to handle the particular error type, so it should rethrow errors it doesn’t know.

Even if we don’t have try...catch, most environments allow us to setup a “global” error handler to 
catch errors that “fall out”. In-browser, that’s window.onerror.

*/

class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }
  
  function test() {
    throw new ValidationError("Whoops!");
  }
  
  try {
    test();
  } catch(err) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    alert(err.stack); // a list of nested calls with line numbers for each
  }

  /*

  Many functions are provided by JavaScript host environments that allow you to schedule asynchronous 
  actions. In other words, actions that we initiate now, but they finish later.

  For instance, one such function is the setTimeout function.

  */

  function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }