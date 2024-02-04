    
document.addEventListener("DOMContentLoaded", function() {
   

// TODO 1: Declare & assign variables pointing to the corresponding element(s)
  
// statement should be the "statement" div
const statement = document.getElementById("statement");

// optionButtons should be all the elements within the "options" div
const optionButtons = document.getElementById("options").children;
//const optionButtons = document.querySelectorAll("#options button");

// explanation should be the "explanation" div

const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation 
const fact = {
      statement: "hey my name is yashas",
      answer: true,
      explanation: "yes your name is yashas because your mom gave you the name of yashas"

    };


// TODO 3: Set the text of the statement element to the fact's statement

statement.textContent = fact.statement;



// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element

function disable (button){
      button.setAttribute("disabled","");
    }


function enable(button){
      button.removeAttribute("disabled","");
    }
   


    
    
// disable(button) should set the button element's attribute "disabled" to the value ""
//enable(optionButtons[1]);


// enable(button) should remove the attribute "disabled" from the button element
//disable(optionButtons[0]);


// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer

function isCorrect(guess){
      return guess === fact.answer;
      
    }

console.log(isCorrect(true));


// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons


for (i=0;i<=1;i++){
  optionButtons[i].addEventListener("click",function(){
    explanation.textContent = fact.explanation;
  })

}




// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element


// TODO 7: Within the event handler function, 
// Use a for loop to disable all the option buttons



// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate



const element1 = document.querySelector('h1');

element1.addEventListener("mouseover", function() {
  element1.textContent = "hovering";
});





          });
