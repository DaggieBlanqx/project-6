//=====================
// Phrases Array
//=====================

//START GAME VARIABLES
const startGame = document.getElementById('buttonReset');

//ARRAY QUESTIONS
let guessPhrases = [
    'what did the array say to the other array', 
    'what an array of sunshine today', 
    'what are arrays favorite animal', 
    'a ray of course',
    'what are rays coding specailty',
    'arrays dah'
];

//GETTING THIS GAME STARTED > GREETING/INTRO/DISPLAY LETTERS
startGame.addEventListener('click', (e) => {
    //BANNER GREETING
        const text = alert('Welcome to the Game');

    //sHOWING THE RULES OF THE GAME > NEED TO POST THIS AFTER END
            const gameRulesDiv = document.getElementById(banner);
            let p = document.createElement('p');
            p.textContent = 'These are the rules...';
            // return gameRules;
            gameRulesDiv.appendChild('gameRules'); 
            //^^^^ HERE IS THE ISSUE******
    //Test - Check
            console.log('Working?');

//Back up as this has no problems but works
    //Game introduction prompt > need to post this after header
            // //It flows through but not creating the element
            // const div = document.querySelector('#banner');
            // const p = document.createElement('p');
            // const text = 'why rules man'.value;
            // // const text = alert('why rules man'); >> If this doesn't work
            // p.textContent = text;
            // div.appendChild(p);
            // console.log("I'm getting there");




    //Get the keyboard displayed (Not working???)
    // const letterBoard = document.getElementById('qwerty');
    // letterBoard.document.createElement('button');
    // letterBoard.appendChild(button);

//After that create new letter boards

});