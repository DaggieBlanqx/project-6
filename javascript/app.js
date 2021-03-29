//=====================
// Phrases Array
//=====================

//=======Starting Variables=========
//START GAME VARIABLES
const startGame = document.getElementById('buttonReset');
// Letter Selection
const letterSelection = document.getElementById('qwerty');


//==================================


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
    //To change the overlay from fixed to relative
        const overlayPosition = document.getElementById('overlay').style.position='relative';
    //BANNER GREETING
        const text = alert('WELCOME TO THE GUESSING GAME!');
        e.preventDefault();
    //sHOWING THE RULES OF THE GAME > NEED TO POST THIS AFTER END
        const div = document.getElementById('banner');
        let p = document.createElement('p');
        p.textContent = 'The rules of the game are to select a letter in trying to guess the phrase. You can try by choosing one letter at a time. If you guess incorrectly, you get to lose an attempt. You have a total of 5 shots Good luck!';
        div.appendChild(p); 
    // });


    //Display the phrases and make them ramdomized
        //Select an phrase from the list of arrays

        //Last ditch effort
       
          const phraseSelection = document.getElementById(phrase)
          for (let i = 0; i < guessPhrases.length; i += 1){
              let li = guessPhrases[i];
              guessPhrases[i] = document.textContent.style.position='relative';;
          }


    // function questionList() {

        // 1) it works/creating the spot > not dispaly
        //positioning issue????
//         for (let i = 0; i < guessPhrases.length; i += 1){
//           const phraseSelection = document.getElementById(phrase);
//             guessPhrases[i] = document.createElement('li');
//             li.appendChild(guessPhrases); 
//             document.getElementById('phrases').innerHTML = phraseSelection; 
//         }
// }
        
        // 2) This run functionally but does not show phrases
        // const questionList = document.getElementById('phrase');
        // for (let i = 0; i < guessPhrases.length; i += 1){
        //     let li = guessPhrases[i];
        //     li = document.createElement('li');
        //     li.appendChild(questionList);

       // Some Examples
        // function makeUL(){
        //     var a = '<ul>',
        //         b = '</ul>',
        //         m = [];
        
        //     // Right now, this loop only works with one
        //     // explicitly specified array (options[0] aka 'set0')
        //     for (i = 0; i < options[0].length; i += 1){
        //         m[i] = '<li>' + options[0][i] + '</li>';
        //     }
        
        //     document.getElementById('foo').innerHTML = a + m + b;
        // }





            //***This works but shows only one of the array phrases***
            // questionList.textContent = guessPhrases[i];

            //    let li = guessPhrases[i];
            //    li.textContent = questionList;
        // questionList.textContent = guessPhrases[i];
             
        //Test
        console.log('got a functional game their bud');
        
        // document.createElement('li');
        // for (let i = 0; i < guessPhrases.length; i += 1){
        //     //show it hear and have the array connect to question list
        //        let li = guessPhrases[i];
        //        li.textContent = questionList;
        
        //     }
        
        });


    //Display the phrases and make them ramdomized
    letterSelection.addEventListener('click', (e) => {
    
    //TEst
        console.log('That javascript keeps flowing man!');
    });
    


        
        //Disable the StartGame Button >> +++ Need a for loop here***
        //startGame disableButton = document.getElementById('buttonReset').disable;
        //startGame.style.display = '';
        // disableButton.disable = true;

