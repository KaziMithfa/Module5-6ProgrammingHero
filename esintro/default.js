function add(num1 = 16, num2 = 0) {
  const sum = num1 + num2;
  console.log(num1, num2, sum);
}

// add(5, 7);
add(5);

function fullName(firstName, lastName = "") {
  const full = firstName + " " + lastName;
  console.log(full);
}

fullName("Kazi", "Mithfa");
