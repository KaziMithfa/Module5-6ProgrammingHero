//directly set on the html element


console.log("This is seperate JS file");
//option 2 onClick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//option 3 : 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


//option 3 : another[We will use this sometimes]

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

//option 4: 


const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4 : another

const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})


//option 4 : final
//important we will use this sometimes

document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
  })

