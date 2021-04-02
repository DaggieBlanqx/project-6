//=====================
// Phrases Array
//=====================

//=======Starting Variables=========
//START GAME VARIABLES
const startGame = document.getElementById('buttonReset');
// Letter Selection
const letterSelection = document.getElementById('qwerty');
const parentNode = document.querySelector('#phrase ul');
const guessPhrases = [
    'what did the array say to the other array', 
    'what an array of sunshine today', 
    'what are arrays favorite animal', 
    'a ray of course',
    'what are rays coding specailty',
    'arrays dah'
];

//==================================

//GETTING THIS GAME STARTED > GREETING/INTRO/DISPLAY LETTERS
startGame.addEventListener('click', (e) => {
    //To change the overlay from fixed to relative
        const overlayPosition = document.getElementById('overlay').style.display ='none';
    //BANNER GREETING
        const text = alert('WELCOME TO THE GUESSING GAME!');
        e.preventDefault();
    //sHOWING THE RULES OF THE GAME > NEED TO POST THIS AFTER END
        const div = document.getElementById('banner');
        let p = document.createElement('p');
        p.textContent = 'The rules of the game are to select a letter in trying to guess the phrase. You can try by choosing one letter at a time. If you guess incorrectly, you get to lose an attempt. You have a total of 5 shots Good luck!';
        div.appendChild(p); 

        //Test
        console.log('Rules Working');


    // NEEDS WORK
    //DISPLAY THE MESSAGE >>> NOT SHOWING UP!!!!!!
    const displayPhrases = phraseSelection => {
        for (i = 0; i < phraseSelection.length; i++) {
            let li = document.createElement('li');
            let liItem = document.createTextNode(phraseSelection[i]);
                if (phraseSelection[i] == " ") {
                    li.appendChild(liItem);
                    parentNode.appendChild(li).className = 'space'; 
                } else {
                    li.appendChild(liItem);
                    parenetNode.appendChild(li).className = 'letter'; 
                }
            }
        }

    //RANDOMIZE THE DISPLAY >>> NOT SHOWING UP!!!!!
    const RandomPhrase = phraseSelection => {
        return phraseSelection[Math.floor(Math.random() * phraseSelection.length)].split('');
    }


    // Works but no display!!!!!
        //Select an phrase from the list of arrays
        //Last ditch effort >> it passed but doesn't create the element
        // const phraseSelection = document.getElementById(phrase);
        // for (let i = 0; i < guessPhrases.length; i += 1){
        //     let li = guessPhrases[i];
        //     guessPhrases[i] = document.textContent;
        // }

        //Test
        console.log('Phrases displaying as intended');
        
        });


//On screen keyboard  Interaction
 letterSelection.addEventListener('click', (e) => {

    //VISUAL REGISTRATION
    // let selectedButtons = [];
    for (i = 0; i < letterSelection; i += 1) {
        if (letterSelection === '.keyrow') {
            letterSelection = letterSelection.style.background='red';
        }
    }

    //CORDINATE IT WITH THE GAME
    



    //Tracker makers
    const scoreBoard = document.querySelector('#scoreboard');
    for (i = 0; i < scoreBoard; i++)  {
        const tries = document.querySelector('.tries');
        if (letterSelection === 'selectedPhrases') {
            //NEED TO SPECIFY IN A FUTURE OCASSION > VAR FOR THE RAM SELECTED
            //ANSWER
            alter('Great job bud!')
        } else { 
            tries -= tries;
        }
    }


//     //Add an event lister to the checkboxes change with bubbling
// ul.addEventListener('change', (e) => {
//     const checkbox = event.target;
//     //store the the checked value into something
//   const checked = checkbox.checked;
//     //to tranverse to both elements
//   const listItem = checkbox.parentNode.parentNode;
  
//   if (checked) {
//   listItem.className = 'responded';
//   } else {
//     listItem.className = '';
//   }
    
//     //Creating an event handler for removing/editng names
//     ul.addEventListener('click', (e) => {
//       //Need to filter out all other buttons
//       if (button.target.tagName === 'BUTTON'){
//         const button = e.target;
//           const li = e.target.parentNode;
//           const ul = li.parentNode;
//         if (button.textContent === 'remove') {
//           ul.removeChild(li);
          
//         } else if (button.textContent === 'edit') {
//           console.log('edit');
          
//         }
      
//       }
//     }) 
    
//   });




    //Test
    console.log('Need more Coffee Time!');


//Collect them and string them together >> array

//disable the option to click on a previous button

// I need to keep it once selecting a new button
    
    //TEst
    });

    console.log('Im toward the end!');


