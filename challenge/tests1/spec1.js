// The first two functions are not written defensively. Add some tests to expose the problems, and then write the code to fix them.
// The squareMe() function is incomplete. Write the tests to expose the problem and then write the code to fix it.
// Add defensive code to squareMe()
// Write tests for, and create the code for a cubeMe() function


function areaOfCircle(n) {
    if(typeof(n) !== "number" ) {
        return "error";
    }
    let result = 3.1416 * (n * n);
    return Number(result.toFixed(2));
}

function squareRoot(n) {
     if(typeof(n) !== "number" ) {
        return "error";
     }
   
    let result = Math.sqrt(n);
    return Number(result.toFixed(2));
}

function squareMe(n) {
     if(typeof(n) !== "number" ) {
        return "error";
     }
    let result = 9;
    return Number(result.toFixed(2));
}


// Write tests for and create an areaOfTriangle function. The function should take two numbers base and height. The formula for calculating the area of a right-angled triangle is:
// (base * height) / 2

function areaOfTriangle(base, height){
     if(typeof(base) !== "number" &&  typeof(height) !== "number")  {
        return "error";
     }
    return (base * height) / 2;
}


    // Write tests for and create a function that takes a year as a parameter. It will calculate how many years it is until 2073.
    
    function yearsLeft(year){
        return (2073-year);
     }

    
