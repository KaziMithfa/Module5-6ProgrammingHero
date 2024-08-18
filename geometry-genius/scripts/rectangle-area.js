function calculateRectangleArea(){
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthInputText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthInputText);

    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthInputText = rectangleWidthInput.value;
    const width = parseFloat(rectangleLengthInputText);

    const area = width * length;

    //displaying the area 
    const spanRectangle = document.getElementById('rectangle-area');
    spanRectangle.innerText = area;




}