const steps = document.querySelector("#steps");
const buttons = document.querySelectorAll("button");

// Stores the input from the user to calculate later
let inputs = [""];
// String to to store current input string
let totalString;
//Operators array for validation without the dot
const operators1 = ["+", "-", "/", "*"];
// Operators with the dot 
const dot = ["."];
//Numbers array for validation
const nums = [0,1,2,3,4,5,6,7,8,9];

function getValue(input) {
  console.log(input)
  // Check fot dubble dot
  if ( inputs[inputs.length -1] === dot[0] && input === ".") {
    console.log("Dubble dots");
  }
  // Check if first input is operator
  else if (inputs.length === 1 && operators1.includes(input)) {
    console.log('First character cant be operator');

  } 
  // Check if last input was dot && this input is character
  else if (inputs[inputs.length -1] === dot[0] && operators1.includes(input)) {
    console.log('Last input was dot && this input is operator');

  }
  //If last input was operator && this input is operator
  else if (operators1.includes(inputs[inputs.length -1]) && operators1.includes(input)) {
    console.log('cant have two operators');
  }
  //If first input is 0
  else if (inputs.length === 1  && input === "0") {
    console.log('first number cant be zero');
  }
  else { 
    inputs.push(input);
    update();
  }
}
function update() {
  totalString = inputs.join("");
  steps.innerHTML = totalString;
  if (inputs.length === 1) {
    steps.innerHTML = "0";
  }
  console.log(inputs);
}
function getTotal() {
  totalString = inputs.join("");
  var newInputString = eval(totalString).toString();
  steps.innerHTML = newInputString;
  console.log(newInputString);
  inputs = newInputString.split("");
  console.log(inputs);
}

buttons.forEach(button => button.addEventListener('click', (e) => {
    e.target.classList.add('clicked');
    setTimeout(function() {
      e.target.classList.remove('clicked');
    }, 100);
    switch(e.target.id) {
    case "deleteAll":
      inputs = [""];
      update();
      break;
    case "backOne":
      if (inputs.length === 1) {
          steps.innerHTML = "0";
        break;
      } else {
        inputs.pop();
        update();
      }
      break;
    case "total":
      // Check if there is no input || last input was operator
      // console.log('hey');
      if (inputs.length === 1 || operators1.includes(inputs[inputs.length -1])) {
        console.log('No input || last input was operator');
      } else {
        getTotal();
      }
      break;
    default:
      getValue(e.target.id);
  }
}));
