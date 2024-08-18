//where to add
const placesList = document.getElementById('places-list')
//What to be added
const li = document.createElement('li');
li.innerText = 'phartoli bon';

//add the child
placesList.appendChild(li);


//now we are adding a section in main
//1. where to add

const mainContainer = document.getElementById('main-container');

//What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul')
const li1 = document.createElement('li');
li1.innerText = "birayni";

ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "borhani";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "salad";
ul.appendChild(li3);


section.appendChild(ul);
mainContainer.appendChild(section);

//set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>

<ul>
<li>Apple</li>
<li>Mango</li>
</ul>

`

mainContainer.appendChild(sectionDress);