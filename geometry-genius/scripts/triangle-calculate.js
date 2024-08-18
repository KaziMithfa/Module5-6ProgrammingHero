/*
** Objective: get base, height of a triangle. Calculate  the area by using the provided formulla
**and then display the area
Step 1: Get the base value
**

*/



function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
   
    const triableheightInput = document.getElementById('triangle-height');
    const triangleHeightText = triableheightInput.value;
    const height = parseFloat(triangleHeightText);

    console.log(height);

    // calculate the area
    const area = 0.5 * base * height;
    // console.log("Area of the triangle is: ", area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}

