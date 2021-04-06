
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


    //DISPLAYS THE ARRAY QUESTION
    const ul = document.querySelector('#phrase ul');
    //DISPLAY ARRAY FUNCTION
        function displayPhrases(guessPhrases) {
        for (i = 0; i < guessPhrases.length; i++) {
            let li = document.createElement('li');
            let liItem = document.createTextNode(guessPhrases[i]);
                if (guessPhrases[i] == "") {
                    li.appendChild(liItem);
                    ul.appendChild(li).className = 'space'; 
                } else {
                    li.appendChild(liItem);
                    ul.appendChild(li).className = 'letter'; 
                }
            }
        }

    //CALLING THE DISPLAYPHRASE AT RANDOM
        displayPhrases(guessPhrases[Math.floor(Math.random() * guessPhrases.length)].split('')); //This shows all phrases >> need it select one

    //Test
        console.log('Phrases displaying as intended');
        });

        //         var cars = ["Saab", "Volvo", "BMW"];
        // document.getElementById("demo").innerHTML = cars;

//==================================

//ON SCREEN INTERACTION
 letterSelection.addEventListener('click', (e) => {

    //VISUAL REGISTRATION
    //NO REGESTERING COLOR ON THE BUTTONS >>> FIX LATER THOUGH****
    // let selectedButtons = [];
    for (i = 0; i < letterSelection; i += 1) {
        if (letterSelection === '.keyrow') {
           let letterSelection = letterSelection.style.color='red';
            // letterSelection = letterSelection.style.background='red';
        } else { //Add code to prevent them from selecting the same letter twice
            alert("We didn't get that. Try again!");
        }
    }

    //MATCH THE LETTER SELECTION WITH PHRASE
    
    function matchInArray (string, expressions) {

                    //WHAT DO I CHOSE>> THE ORIGNAL ARRAY OR THE DISPLAY ARRAY?
                    const matchExpression = expressions.length;
                    i = 0;
            
                    for (; i < expressions; i++) {
                        if (string.match(expressions[i]))
                        {
                        return true;
                        }
                    return false;
                        }
                };
            
            setTimeout(function() {
                console.log(matchInArray(thisString, thisExpressions));
                console.log(matchInArray(thisString, thisExpressions2));
            }, 200)



    alert('Keep chip chip chipping away!');


    //Tracker makers (IN PROGRESS)
    //I NEED TO CONNECT IT TO THE ARRAY>>> BUT FOR THE MEAN TIME THE MESAGE IS OK***

    
    // function matchInArray (string, expressions) {

    //             const matchExpression = expressions.length;
    //             i = 0;
        
    //             for (; i < expressions; i++) {
    //                 if (string.match(expressions[i]))
    //                 {
    //                 return true;
    //                 }
    //             return false;
    //                 }
    //         };
        
    //     setTimeout(function() {
    //         console.log(matchInArray(thisString, thisExpressions));
    //         console.log(matchInArray(thisString, thisExpressions2));
    //     }, 200)


    // THE OLDER WAY THAT DIDN'T WORK REALLY WELL
    // const scoreBoard = document.querySelector('#scoreboard');
    // for (i = 0; i < letterSelection; i++)  {
    //     const tries = document.querySelector('.tries');
    //     if (letterSelection === displayPhrases) {
    //         //Code to match letter with the string of the displayPhrase

    //         // the alert feedback
    //         alter('Great job bud!')

    //         //color the button green for correction >> but disable it
    //     } else { 
    //         tries -= tries;
    //     }
    // }

    //Test
    console.log('Need more Coffee Time!');


//Collect them and string them together >> array

//disable the option to click on a previous button

// I need to keep it once selecting a new button
    
    //TEst
    });

    console.log('Im toward the end!');


//===================================

// SOME EXAMPLES!!!!!!!!!!!!!!
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





    //SOLID TRY BUT NOT SHOWING PHRASESELECTION
    // const displayPhrases = phraseSelection => {
    // //Experimental Try
    // // const displayPhrases (phraseSelection) {
    //     for (i = 0; i < phraseSelection.length; i++) {
    //         let li = document.createElement('li');
    //         let liItem = document.createTextNode(phraseSelection[i]);
    //             if (phraseSelection[i] == "") {
    //                 li.appendChild(liItem);
    //                 ul.appendChild(li).className = 'space'; 
    //             } else {
    //                 li.appendChild(liItem);
    //                 ul.appendChild(li).className = 'letter'; 
    //             }
    //         }
    //     }