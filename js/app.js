/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let noun = prompt("Enter a noun; number");
let noun = prompt("Enter a noun");
let adjective = prompt("Enter a adjective");
let noun = promt("Enter a noun");




/*------------------------ Cached Element References ------------------------*/
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");


/*----------------------------- Event Listeners -----------------------------*/
resetBtn.onclick = reset 


/*-------------------------------- Functions --------------------------------*/
function getGameReady()
function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage();
	} else {
		renderTurnMessage();
	}
}