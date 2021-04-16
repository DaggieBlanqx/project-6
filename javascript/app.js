
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
const letters = document.querySelector('li .letter');
const misses = document.querySelector('.misses');

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

    //RANDOMIZE THE PHRASES
        displayPhrases(guessPhrases[Math.floor(Math.random() * guessPhrases.length)].split(''));

    //Test
        console.log('ITS RANDOM');
        });

    //CHECK LETTER 

        // HOW TO CONNECT DISPALYPHRASE TOOOOOOO MATCHHHHHHHHH

        let missed = 0;
        const checkLetter = (button) => {
            let matched = null;
            
            //SHOULD i USE DISPLAYPHRASE INSTEAD????????????????????????????????????????????
            // for (i = 0; i < letters.length; i++) {
            //     if (button === letters[i].textContent.toLowerCase()) {
            //         letters[i].classList.add('show');
            //         matched = true;
            //     }

            // }

            for (i = 0; i < displayPhrases.length; i++) {
                if (button === displayPhrases[i].textContent.toLowerCase()) {
                    displayPhrases[i].classList.add('show');
                    matched = true;
                }

            }
            
            return matched
            // displayPhrases(matched);
            //SHOULD THIS BE MATCHES WITH THE DISPALY PHRASE

        };

letterSelection.addEventListener('click', (e) => { 
    if (e.target.tagName === "BUTTON") {
        e.target.className = 'chosen';
        e.target.disable = true;  
        const match = checkLetter(e.target.textContent.toLowerCase());
        missed++;
        
            if (match === null) {
                    //CREATE THE NEW LOST HEART ICON
                    const ol = document.querySelector('#scoreboard ol');
                    let img = document.createElement('img').className = "correct";
                    img.src = "images/lostHeart.png";
                    ol.appendChild(img);
                    //REMOVE THE LIVE HEART ICON
                    function  removeImage(scoreboard) {
                        let removeImg = target.document.queryselector('.tries');
                        removeImg.parentNode.removeChild(removeImg);
                        removeImage();
                    }

            }  else {

                //Have it repeat!!!!!

            }         
         missed.textContent = missed;

        }

   // make a function to check if I won/lost
        // checkWin();

});                    




//++++++++++++++++++++++++++++++++++++++++++


// Current On screen interation sections

// //ON SCREEN INTERACTION
//  letterSelection.addEventListener('click', (e) => {

//     //VISUAL REGISTRATION
//     //NO REGESTERING COLOR ON THE BUTTONS >>> FIX LATER THOUGH****
//     for (i = 0; i < letterSelection; i += 1) {
//         if (letterSelection === '.keyrow') {
//            let letterSelection = letterSelection.style.color='red';
//             // letterSelection = letterSelection.style.background='red';
//         } else { //Add code to prevent them from selecting the same letter twice
//             alert("We didn't get that. Try again!");
//         }
//     }

//     //MATCH THE LETTER SELECTION WITH PHRASE 
//     //****Maybe need to focus on using the class to show vs hidden/deal with the overlay****
//          // IT PASS THE TEST
//          function matchInArray(letterSelection) {
//             for (i = 0; i < guessPhrases.length; i++) {
//                 if (letterSelection === guessPhrases[i]) {
//                     console.log(' MatchinArray working?'); //NOT RESPONSIVE > DON'T KNOW WHY
//                     return true;
//                 } else { 
//                     return false;
//                 }
//             }
//         }
                    
//             matchInArray(); //i'M NOT SURE IF CALLED RIGHT

//     alert('Keep chip chip chipping away!');

// // CORRECT/INCORRECT INDICATORS
// //+ >>> THE ELSE TEST SHOWS & RESPONSIVE
// //- >>> THE iF TEST NOT WORKING
// function checkLetter(letterSelection) {
//     //Connecting checkAnswer to div (phrase variable)
//     let checkedPhrase = document.querySelector('#phrase ul');
//     //To connect ul to the ul element > setting up for child elements
//     let ul = document.querySelector('ul');
//     //Focusing on the children elements of the phrase .letter
//     const liLetters = ul.children; //NEED TO ADD THE PSUDO CLASS ROOT
//     if (letterSelection == checkedPhrase) { //<<< THIS IS THE ISSUE <<<<<<<
//         //Change this to the puedoclass :root
//         const liLetters = ul.children.style.color = 'green';
//         return overlayPosition.style.display = 'show';
//     } else {
//         //the letter select changes the puedoclass :root (#1)
//         console.log('No False please!'); //THIS WORKS <<<<<<
//     }
// }

// checkLetter();



//=======================================================

  

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