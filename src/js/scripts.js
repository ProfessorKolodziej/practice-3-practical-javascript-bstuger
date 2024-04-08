// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


const myName = "Bridget";
let myAge = 24;

console.log(myName);
console.log(myAge);

//Practice JavaScript

/* Multi
line comment
*/

//Show and hide an element on the page

//Take a class and toggle it, find that para via ID and toggle to hide

//Find the element to hide

//HTML markeup in HTML will stay the same

const toggledPara = document.querySelector('.show');
console.log(toggledPara);


function togglePara() {
	toggledPara.classList.toggle("show");
	toggledPara.classList.toggle("hide");
	console.log(toggledPara);
	console.log(26);
}


//find the button and toggle para when clicked
const toggleButton = document.querySelector('#t-control');

toggleButton.addEventListener("click", togglePara)
