//Triangle
// button onclick Function
function calculateTriangleArea(){
    //get triangle base value frm text field
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    // console.log(baseValueText);
    const bases = parseFloat(baseValueText);
    console.log(bases);
    baseField.value='';

    //get Triangle Height Value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);
    heightField.value='';

    // calculate values
    const area = 0.5 * bases * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    // add to calculation entry
    addToCalculateEntry('Triangle', area);
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
    
    //validate Input: width and length
    if(isNaN(width)||isNaN(length)){
        // console.log('width is not a number');
        alert('Please insert a number');
        return;
    }

    // show Ractangle area
    const areaSpan = document.getElementById('ractangle-area');
    areaSpan.innerText = area;
    // add to calculation entry
    addToCalculateEntry('Ractangle', area);
}

//Parallelogram
// reusable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);
    const height = getInputValue('parallelogram-base');
    // console.log(height);
    //validate number
    if(isNaN(base)||isNaN(height)){
        alert('Please insert a number');
        return;
    }
    // calculate values
    const area = base * height; 
    // console.log(area);
    setElementInnerText('parallelogram-area',area);
    // add to calculation entry
    addToCalculateEntry('parallelogram', area);
}


// Ellipse
function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = Math.PI * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed();
    setElementInnerText('ellipse-area',areaTwoDecimal);
    // add to calculation entry
    addToCalculateEntry('Ellipse', area);
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
// add to calculation entry
function addToCalculateEntry(areaType, area){
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    // p.innerHTML = areaType+' '+area;
    p.classList.add('my-4');
    p.innerHTML = `${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}
// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if need to add some class
 * 4. set innerHTML. it could be dynamic Template string
 * 5. appand the created element as aq child  
 */

//Data Validation
/**
 * 1.set the proper type of the input fields. (number, data, email, password)
 * 2. check 'typeof'
 * 3. 'parseFloat' 'parseInt'
 * 4. 'isNan()' NaN means - not a number. NaN is checking whether the input is not a number or not.
 */