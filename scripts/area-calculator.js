//Triangle
// button onclick Function
function calculateTriangleArea(){
    //get triangle base value frm text field
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    // console.log(baseValueText);
    const base = parseFloat(baseValueText);
    console.log(base);
    baseField.value='';

    //get Triangle Height Value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    heightField.value='';

    // calculate values
    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

// Ractangle
//button onclick Function
function calculateRactangleArea(){
    // console.log('ract');
    //get rectangle width
    const widthField = document.getElementById('ractangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);
    widthField.value='';

    //get Ractangle Length
    const lengthField = document.getElementById('ractangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);
    lengthField.value='';

    // calculate values
    const area = width * length;  
    console.log(area);

    // show Ractangle area
    const areaSpan = document.getElementById('ractangle-area');
    areaSpan.innerText = area;
}


// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-base');
    // console.log(height);

    // calculate values
    const area = base * height;  
    // console.log(area);
    setElementInnerText('parallelogram-area', area);
}
// Ellipse
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = Math.PI * majorRadius * minorRadius;
    setElementInnerText('ellipse-area',area);
}


// reuseable get input valuefield in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuseable set span text
function setElementInnerText(elementID, area){
    const element = document.getElementById(elementID);
    element.innerText = area;
}