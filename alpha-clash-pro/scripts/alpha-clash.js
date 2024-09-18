/* The before code starts here */

// function play(){
//     //step1: Hide the home screen

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //show the playground

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');

// }

// function handleKeyboardButtonPress(event){
//     const playerPressed = event.key;
//     console.log('player pressed',playerPressed);

//     //stop the game if player press ESC
//     if(playerPressed === 'Escape'){
//         gameOver();
//     }

//     //get the expected to press

//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     const expectedAlphabet = currentAlphabet.toLowerCase();

//     // console.log(playerPressed,expectedAlphabet);

//     // check matched or not
//     if(playerPressed === expectedAlphabet){

//         const currentScore = getTextElementValueById('current-score');
//         const updatedScore = currentScore + 1;
//         setTextElementById('current-score',updatedScore);

//         // ---------
//         //update score
//         //1.get the current score
//         // const currentScroeElement = document.getElementById('current-score');
//         // const currentScoreText = currentScroeElement.innerText;
//         // const currentScore = parseInt(currentScoreText);
//         // console.log(currentScore);

//         //2. increase the score by 1

//         // const newScore = currentScore + 1;

//         //3. show the updated score

//         // currentScroeElement.innerText = newScore;

//         //start a new round
//         removeColorById(expectedAlphabet);
//         continueGame();
//     }

//     else{

//         const currentLife = getTextElementValueById('current-life');
//         const updatedLife = currentLife - 1;
//         setTextElementById('current-life',updatedLife);

//         if(updatedLife == 0){
//            gameOver();
//         }

//         //-------
//         //step1: get the current life number
//         // const currentLifeElement = document.getElementById('current-life');
//         // const currentLifeText = currentLifeElement.innerText;
//         // const currentLife = parseInt(currentLifeText);

//         // //step2: reduce the current Life by 1

//         // const newLife = currentLife - 1;

//         // //update
//         // currentLifeElement.innerText = newLife;

//     }

// }

// document.addEventListener('keyup',handleKeyboardButtonPress)

// function continueGame(){
//     //step 1: Generate a random alphabet

//     const alphabet = getARandomAlphabet();

//     //set randomally alphabet to the screen (show it)
//     currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;

//     setBackgroundColorById(alphabet);

// }

// function play(){
//     //hide everything and show only the playground
//     hideElementById('home-screen');
//     hideElementById('final-score');
//     showElementById('playground');

//     //reset score and life
//     setTextElementById('current-life',5);
//     setTextElementById('current-score',0)

//     continueGame();
// }

// function gameOver(){
//     hideElementById('playground');
//     showElementById('final-score');

//     //update final score
//     //1. get the final score
//     const lastScore = getTextElementValueById('current-score');
//     setTextElementById('game-score',lastScore);

//     // clear the last selected alphabet highlight

//     const currentAlphabet = getElementTextById('current-alphabet');
//     removeColorById(currentAlphabet);

// }

/* The before code ends here */

function handleKeyBoardPressButton(event) {
  const pressedAlphabet = event.key;

  if (pressedAlphabet === "Escape") {
    gameOver();
  }

  const expectedAlphabetId = document.getElementById("current-alphabet");
  const expectedAlphabetText = expectedAlphabetId.innerText;
  const expectedAlphabet = expectedAlphabetText.toLowerCase();

  if (pressedAlphabet === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementById("current-score", updatedScore);
    removeBackgroundColorofAlphabet(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementById("current-life", updatedLife);

    if (updatedLife == 0) {
      gameOver();
    }
  }
}

function continueGame() {
  const alphabet = CreateARandomAlphabet();
  const currrentAlphabet = document.getElementById("current-alphabet");
  currrentAlphabet.innerText = alphabet;
  setBackgroundColorofAlphabet(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("playGround");
  hideElementById("final-Score");

  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);

  continueGame();
}

//adding addEventListner to handle the pressing the keyboardButtons
document.addEventListener("keyup", handleKeyBoardPressButton);

function gameOver() {
  hideElementById("home-screen");
  hideElementById("playGround");
  showElementById("final-Score");

  const lastScore = getTextElementValueById("current-score");
  setTextElementById("game-score", lastScore);

  const currentAlphabet = getElementTextById("current-alphabet");
  console.log(currentAlphabet);
  removeBackgroundColorofAlphabet(currentAlphabet);
}
