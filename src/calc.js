// here we are testing the functions

function add(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "Error!";
    }
    return num1 + num2;
}

function sub(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number") {
        alert("Error!");
    }
    return num1 - num2;
}


function multiplication(num1, num2){
    if (typeof(num1) !=="number" || typeof(num2) !=="number") {
        return "Error!";
        }
        
        return num1 * num2;
}

function division(num1, num2){
    if (typeof(num1) !=="number" || typeof(num2) !=="number") {
        return "Error!";
        }
        
        return num1 / num2;
}
