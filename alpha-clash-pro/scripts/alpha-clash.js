

// function play(){
//     //step1: Hide the home screen

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');



//     //show the playground

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');


// }

function continueGame(){
    //step 1: Generate a random alphabet

    const alphabet = getARandomAlphabet();

    //set randomally alphabet to the screen (show it)
    currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);


}

function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}