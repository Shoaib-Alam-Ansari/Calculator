// Selects the input element with the ID "inputBox" and stores it in the variable 'input'
let input = document.getElementById("inputBox");
// Selects all button elements on the page and stores them in the variable 'button'
let button = document.querySelectorAll("button");

// Initializes an empty string variable 'string' to store the input
let string = "";
// Converts the NodeList 'button' into an array and stores it in the variable 'arr'
let arr = Array.from(button);
// Iterates over each button in the 'arr' array
arr.forEach(button => {
    // Adds a click event listener to each button
    button.addEventListener("click", (e) =>{
        // Checks if the clicked button's innerHTML is "="
        if (e.target.innerHTML == "="){
            // Evaluates the string expression and assigns the result back to 'string'
            string = eval(string);
            // Sets the value of the input box to the evaluated result
            input.value = string;
        }
        // Checks if the clicked button's innerHTML is "AC"
        else if (e.target.innerHTML == "AC"){
            // Resets the 'string' variable to an empty string
            string = "";
            // Clears the input box
            input.value = string;
        }
        // Checks if the clicked button's innerHTML is "DEL"
        else if (e.target.innerHTML == "DEL"){
            // Removes the last character from the 'string'
            string = string.substring(0,string.length-1);
            // Updates the input box with the modified 'string'
            input.value = string;
        }
        // For other buttons (numbers and operators)
        else{
            // Appends the innerHTML of the clicked button to the 'string'
            string += e.target.innerHTML;
            // Updates the input box with the modified 'string'
            input.value = string;
        }
    })
})
