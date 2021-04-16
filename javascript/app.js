
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

    ///VVVVVVVVVVVVVVVVVVVVVVVVVVVV ---- DOESN'T WORK & NOT MATCHING/THE COLOR INDICTOR NOT SHOWING
    //CHECK LETTER SEQUENCE          
    let missed = 0;
    const checkLetter = (letterSelection) => {
        let matched = null;

        letters.addEventListener('click', (e) => {

            for (i = 0; i < guessPhrases.length; i++) {
                if (letterSelection === guessPhrases[i].textContent.toLowerCase()) {
                    guessPhrases[i].classList.add('show'); //not showing it's color indicator
                    matched = true;

                //test >>> not reflecting that it is true
                console.log('True');

                }
            
            checkLetter(letterSelection);

        };

    });

    };

        ///VVVVVVVVVVVVVVVVVVVVVVVVVVVV ---- tHE COUNTER ISN'T WORKING DOESN'T WORK
                                            //not adding the new images
                                            //not counting the missed attempts
        //ADDING IMAGES AND COUNTING THE LOST HEARTS
    letterSelection.addEventListener('click', (e) => { 
        if (e.target.tagName === 'letter') {
            e.target.className = 'chosen';
            e.target.disable = true;  
            const matched = checkLetter(e.target.textContent.toLowerCase());
            missed++;
            
                if (matched === null) {
                        //CREATE THE NEW LOST HEART ICON
                        const ol = document.querySelector('#scoreboard ol');
                        let img = document.createElement('img').classList = "tries";
                        img.src = "images/lostHeart.png";
                        ol.appendChild(img);
                        //REMOVE THE LIVE HEART ICON
                        function  removeImage(scoreboard) {
                            let removeImg = target.document.queryselector('.tries').classList = "correct";
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

        console.log(missed);

    });                    



//=======================================================
