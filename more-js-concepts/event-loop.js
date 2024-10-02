console.log("synchronous1");

setTimeout(function timeOut() {
  console.log("asynchronous 1");
}, 5000);

console.log("synchronous2");

setTimeout(function timeOut() {
  console.log("asynchronous 2");
}, 10000);

console.log("synchronous3");
