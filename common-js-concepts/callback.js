function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("Good Morning ", name);
}

function greetEvening(name) {
  console.log("Good Evening ", name);
}

greeting(greetEvening, "Anny");

greeting(greetingHandler, "Tom Hanks");
