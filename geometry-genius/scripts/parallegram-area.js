function calculateParallelogramArea(){

    const base = getInputValueById('paralogram-base');
    const height = getInputValueById('parallogram-height');

    const area =  base * height;

    setInnerArea('parallogram-area',area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;


}


function setInnerArea(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}