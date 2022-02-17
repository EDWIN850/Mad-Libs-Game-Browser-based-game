/*-------------------------------- Constants --------------------------------*/
const MadLibsForm = document.getElementById('MadLibs-form');
const storySection = document.getElementById('completed-story');


/*---------------------------- Variables (state) ----------------------------*/
let userSubmission = {}
const story = `
<h3>Your completed story:</h3>
<p>Summer is one of the  <span class="inserted-text">${userSubmission.noun1}</span> seasons. 
The other three seasons are <span class="inserted-text">${userSubmission.noun2}</span>, and <span class="inserted-text">${userSubmission.adjective1}</span>
<span class="inserted-text"> ${userSubmission.noun3}</span>.
Two major U.S. summer holidays are <span class="inserted-text">${userSubmission.adjective2}</span> Day
and <span class="inserted-text">${userSubmission.adjective3}</span> Day.
Summer is a(n) <span class="inserted-text">${userSubmission.adjective4} </span>
time of the year, when the days are <span class="inserted-text">${userSubmission.adjective5}</span> and the
<span class="inserted-text">${userSubmission.noun4}</span>  <span class="inserted-text">${userSubmission.verb}</span>s in the sky all day long. 
 One of the most popular summmer treats is ice <span class="inserted-text">${userSubmission.noun5}</span>
 with <span class="inserted-text">${userSubmission.noun6}</span> gallons sold each year. `

 storySection.innerHTML += story;
 storySection.classList.remove('hide');







/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
MadLibsForm.addEventListener("submit", function (evt) {
  evt.preventDefault()
  
})


/*-------------------------------- Functions --------------------------------*/
const submitMadLibs = (event) => {
  alert('Hey!');
  event.preventDefault();
  MadLibsForm.classList.add('hide');
}