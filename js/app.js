/*-------------------------------- Constants --------------------------------*/
const MadLibsForm = document.getElementById('MadLibs-form');
const storySection = document.getElementById('completed-story');
console.log(MadLibsForm)

/*---------------------------- Variables (state) ----------------------------*/
const story = `
<h3>Your completed story:</h3>
<p>Summer is one of the  <span class="inserted-text">${userSubmission.noun,number} </span> seasons. 
The other three seasons are <span class="inserted-text">${userSubmission.noun}</span>, and <span class="inserted-text">${userSubmission.adjective}</span>
<span class="inserted-text"> ${userSubmission.noun}</span>.
Two major U.S. summer holidays are <span class="inserted-text">${userSubmission.adjective}</span> Day
and <span class="inserted-text">${userSubmission.adjective}</span> Day.
Summer is a(n) <span class="inserted-text">${userSubmission.adjective} </span>
time of the year, when the days are <span class="inserted-text">${userSubmission.adjective}</span> and the
<span class="inserted-text">${userSubmission.noun}</span>  <span class="inserted-text">${userSubmission.verb}</span>s in the sky all day long. 
 One of the most popular summmer treats is ice <span class="inserted-text">${userSubmission.noun,typeoffood}</span>
 with <span class="inserted-text">${userSubmission.noun,number}</span> gallons sold each year./p>






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
  alert('Hey!');
  event.preventDefault();
  MadLibsForm
}) 