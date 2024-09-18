/*The before code starts here */

// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');

// }

// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }

// function removeColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');

// }

// function showElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('hidden');
// }

// function getARandomAlphabet(){

//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');

//     //get a random index between 0 - 25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);

//     const alphabet = alphabets[index];
//     return alphabet;

// }

// function getTextElementValueById(elementId){
//     const element = document.getElementById(elementId);
//     const elementValueText = element.innerText;
//     const value = parseInt(elementValueText);
//     return value;

// }

// function setTextElementById(elementId,value){
//     const element = document.getElementById(elementId);
//     element.innerText = value;

// }

// function getElementTextById(elementId){
//     const element = document.getElementById(elementId);
//     const text = element.innerText;
//     return text;
// }

/*The before code ends here  ...*/

/* The new code starts from here...*/

//hiding the necessary pages

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// adding the necessary pages

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// function to create a random alphabet to play the game

function CreateARandomAlphabet() {
  const alphabetStrings = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetStrings.split("");

  const randomValue = Math.random() * 25;
  const index = Math.round(randomValue);

  const alphabet = alphabetArray[index];
  return alphabet;
}

//funtion to set the background of the alphabet

function setBackgroundColorofAlphabet(buttonId) {
  const button = document.getElementById(buttonId);
  button.classList.add("bg-orange-400");
}

//function to remove the background color of the alphabet

function removeBackgroundColorofAlphabet(buttonId) {
  const button = document.getElementById(buttonId);
  button.classList.remove("bg-orange-400");
}

// getting the score and life with this function

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

// setting the score and life score with this function

function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
