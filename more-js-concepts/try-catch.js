function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const errorTag = document.getElementById("error");

  try {
    const age = parseInt(ageText);

    if (isNaN(age)) {
      throw "please enter a number";
    } else if (age < 18) {
      throw "bacha kacha is not allowed";
    } else if (age > 30) {
      throw "murbi murbi";
    }

    errorTag.innerText = "";
  } catch (err) {
    errorTag.innerText = "Error: " + err;
  } finally {
    console.log("All done inside try catch");
  }

  console.log(11111);
}
