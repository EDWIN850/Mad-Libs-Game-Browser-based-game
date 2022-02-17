/*-------------------------------- Constants --------------------------------*/
const MadLibsForm = document.getElementById('MadLibs-form');
const storySection = document.getElementById('completed-story');
console.log(MadLibsForm)

/*---------------------------- Variables (state) ----------------------------*/






/*------------------------ Cached Element References ------------------------*/
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");


/*----------------------------- Event Listeners -----------------------------*/
MadLibsForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
  console.log(evt)
})


/*-------------------------------- Functions --------------------------------*/
const submitMadLibs = (event) => {
  alert('HELLO!');
}