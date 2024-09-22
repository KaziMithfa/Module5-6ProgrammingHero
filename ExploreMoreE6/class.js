const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 60000 },
  { id: 3, name: "hp", price: 75000 },
  { id: 6, name: "Asus", price: 68000 },
];

//Similar class has some properties and methods
class Product {
  country = "Bangladesh";
  //for different property for all objects
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking aboul ${talk}`);
  }
}

const lenovo = new Product("Le le lenovo");
//console.log(lenovo);
lenovo.speak("Hello");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  lecture() {
    console.log("Sir is teaching Math");
  }
}

const tapan = new Teacher("Tapan", "English");
console.log(tapan);
