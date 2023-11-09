/*

A promise is a special JavaScript object that links the “producing code” and the “consuming code” 
together. In terms of our analogy: this is the “subscription list”. The “producing code” takes 
whatever time it needs to produce the promised result, and the “promise” makes that result available 
to all of the subscribed code when it’s ready.

The constructor syntax for a promise object is:

let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of 
these callbacks:

resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.

The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" 
when reject is called.

result — initially undefined, then changes to value when resolve(value) is called or error when 
reject(error) is called.

*/

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });

  /*

  The executor is called automatically and immediately (by new Promise).

The executor receives two arguments: resolve and reject. These functions are pre-defined by the 
JavaScript engine, so we don’t need to create them. We should only call one of them when ready.

After one second of “processing”, the executor calls resolve("done") to produce the result. This 
changes the state of the promise object:

There can be only a single result or an error
The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored:

let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

Consumers: then, catch
A Promise object serves as a link between the executor (the “producing code” or “singer”) and the 
consuming functions (the “fans”), which will receive the result or error. Consuming functions can 
be registered (subscribed) using the methods .then and .catch.

  */

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise1.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );

  /*

let promise = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // shows "done!" after 1 second

catch
If we’re interested only in errors, then we can use null as the first argument: 
.then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly 
the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second

To summarize:

A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome 
is passed through instead, to the next suitable handler.

If a finally handler returns something, it’s ignored.

When finally throws an error, then the execution goes to the nearest error handler.

  */

new Promise((resolve, reject) => {
    throw new Error("error");
  })
    .finally(() => alert("Promise ready")) // triggers first
    .catch(err => alert(err));  // <-- .catch shows the error

/*

Promises chaining
Let’s return to the problem mentioned in the chapter Introduction: callbacks: we have a sequence of 
asynchronous tasks to be performed one after another — for instance, loading scripts

*/

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});


/*

A classic newbie error: technically we can also add many .then to a single promise. This is not 
chaining.

For example:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

Returning promises
A handler, used in .then(handler) may create and return a promise.

In that case further handlers wait until it settles, and then get its result.

For instance:

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});

Fetch
fetch('/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(function(response) {
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    return response.text();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    alert(text); // {"name": "iliakan", "isAdmin": true}
  });

  .catch handles errors in promises of all kinds: be it a reject() call, or an error thrown in a 
  handler.
.then also catches errors in the same manner, if given the second argument (which is the error handler).

We should place .catch exactly in places where we want to handle errors and know how to handle them. 

The handler should analyze errors (custom error classes help) and rethrow unknown ones (maybe they 
are programming mistakes).

It’s ok not to use .catch at all, if there’s no way to recover from an error.

In any case we should have the unhandledrejection event handler (for browsers, and analogs for other 
environments) to track unhandled errors and inform the user (and probably our server) about them, so 
that our app never “just dies”.

*/



