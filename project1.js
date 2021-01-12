console.log("it works3")


//NOTE: AFTER LATE MONDAY AFTERNOON MEETING W/ DAVID IT WAS EVIDENT I NEEDED TO 
//RESTRUCTURE MY HTML AND START OVER WITH JAVASCRIPT TO MAKE THE GAME WORK COMPLETELY.
//I WAS GOING IN THE WRONG DIRECTION.

//I USED THIS EXAMPLE AS REFERENCE FOR STRUCTUING HTML AND 
//SOME OF THE JAVASCRIPT METHODS:
//https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
//WHAT IS LEFT TO DO (as of 12:30PM Tuesday)
//1) make backCard transpart upon click.  Use opacity: 0% in CSS
//2) capture match pair with two variables.  One clicked = true, the other = false.
//3) make unmatched pairs turn opacity = 100%
//4) make sure only two cards can be selected at one time.

//VARIABLES AND CODE

// let allCards = document.querySelectorAll('.cardDeck');
// let allCards = document.querySelectorAll('.testCard');
let backTrans = document.querySelectorAll('.cardBack');
let isTrans = false;
let firstSel, secondSel;


function transparent() {
    // this.classList.toggle('trans');
    this.classList.add('trans');
    if (!isTrans) {
        isTrans = true;
        firstSel = this;
        return;
    }
secondSel = this;
isTrans = false;

isMatch();

}
function isMatch() {
if (firstSel.dataset.display === secondSel.dataset.display) {
removeClickEvent();
return;
}

removeClickEvent();

}
function removeClickEvent() {
    firstSel.removeEventListener('click', transparent);
}

hideLetter();


////used w3schools.com to look up setTimeout info and syntax.  This turns the cards opaque if the two clicks aren't a match
//Suggested by Neal
function hideLetter() {
    setTimeout(function() {
        firstSel.classList.remove('trans');
        secondSel.classList.remove('trans');
    }, 2000);
}


backTrans.forEach(card => card.addEventListener('click', transparent));











//NOTE: ALL CODE AND NOTES BELOW THIS LINE ARE FROM PRE-REFACTOR AND ONLY FOR REFERENCE


//IF innerText of id = the innerText of the second id then do not
//change color of text back to green with setInterval


//testing selecting and changing card



// //DECLARED VARIABLES BELOW
// let card = document.querySelectorAll('.card');
// let cards = document.querySelectorAll('class');

// let card1 = document.querySelector('#card1');
// let card2 = document.querySelector('#card2');
// let card3 = document.querySelector('#card3');
// let card4 = document.querySelector('#card4');
// let card5 = document.querySelector('#card5');
// let card6 = document.querySelector('#card6');
// let card7 = document.querySelector('#card7');
// let card8 = document.querySelector('#card8');
// let card9 = document.querySelector('#card9');
// let card10 = document.querySelector('#card10');
// let card11 = document.querySelector('#card11');
// let card12 = document.querySelector('#card12');



// //let div = document.querySelectorAll('div');

// //ARRAY allCards
// let allCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];
// console.log(allCards);

// let pairCards = [];

// //VARIABLES SANDBOX


// //WINNING COMBOS (BOOLEAN VARIABLES) MAYBE NOT REQUIRED?

// let win1 = (card1 && card2);
// let win2 = (card3 && card4);
// let win3 = (card5 && card6);
// let win4 = (card7 && card8);
// let win5 = (card9 && card10);
// let win6 = (card11 && card12);


// //CONSOLE LOGS
// console.log(div[0]);
// console.log(div);
// console.log(card1);
// console.log(card1.innerText);
// console.log(card2);
// console.log(card2.innerText);
// console.log(card3);
// console.log(card3.innerText);

// // CODE SANDBOX:
// // console.log(allCards);
// // let i = 0;
//     for (let i = 0; i < allCards.length; i++) {
//     allCards.addEventListener('click', function() {
//         allCards.value.style.color = 'white';
        
// })

//     }

// card1.addEventListener("click", function() {
//     if (clicks % 2 === 0) {
//         clicks++
//         card1.style.color = 'white';

//     }
//     else if (clicks % 2 === 1) {
//         clicks--
//         card1.style.backgroundColor = 'white';
//     }

//     let interval1 = setInterval(flipped1, 5000);
//     //card1 click
//             card1.addEventListener('click', function() {
//                 card1.style.color = 'white';
    
//             })
        
    
           
//             function flipped1() {
//                 card1.style.color = 'green';
    
                
//             }
//         })




//Trying to figure out a way to arrary this info below and keep a winning pair of picks from turning back to green.
//Need to limit picks to two at time.  research on Monday.

//BELOW ARE THE EVENTLISTENERS (ON EACH CARD)

//         let interval1 = setInterval(flipped1, 5000);
// //card1 click
//         card1.addEventListener('click', function() {
//             card1.style.color = 'white';

//         })
    

       
//         function flipped1() {
//             card1.style.color = 'green';

            
//         }
        
        
//         let interval2 = setInterval(flipped2, 5000);
// //card2 click        
//         card2.addEventListener('click', function() {
//             card2.style.color = 'white';

//         })
    

//         function flipped2() {
//             card2.style.color = 'green';

            
//         }
//         let interval3 = setInterval(flipped3, 5000);
// //card3 click
//         card3.addEventListener('click', function() {
//             card3.style.color = 'white';

//         })


//         function flipped3() {
//             card3.style.color = 'green';

            
//         }
        
// //         let interval4 = setInterval(flipped4, 5000);
// // //card4 click
// //         card4.addEventListener('click', function() {
// //             card4.style.color = 'white';

//         })


//         function flipped4() {
//             card4.style.color = 'green';

            
//         }
//         let interval5 = setInterval(flipped5, 5000);
//     //card5 click
//         card5.addEventListener('click', function() {
//             card5.style.color = 'white';

//         })


//         function flipped5() {
//             card5.style.color = 'green';

            
//         }

//         let interval6 = setInterval(flipped6, 5000);
//     //card6 click
//         card6.addEventListener('click', function() {
//             card6.style.color = 'white';

//         })


//         function flipped6() {
//             card6.style.color = 'green';

            
//         }

//         let interval7 = setInterval(flipped7, 5000);
//     //card7 click
//          card7.addEventListener('click', function() {
//             card7.style.color = 'white';

//         })


//         function flipped7() {
//             card7.style.color = 'green';

            
//         }

//         let interval8 = setInterval(flipped8, 5000);
//     //card8 click
//          card8.addEventListener('click', function() {
//             card8.style.color = 'white';

//         })


//         function flipped8() {
//             card8.style.color = 'green';

            
//         }

//         let interval9 = setInterval(flipped9, 5000);
//     //card9 click
//         card9.addEventListener('click', function() {
//             card9.style.color = 'white';

//         })


//         function flipped9() {
//             card9.style.color = 'green';

            
//         }

//         let interval10 = setInterval(flipped10, 5000);
//     //card10 click
//         card10.addEventListener('click', function() {
//             card10.style.color = 'white';

//         })


//         function flipped10() {
//             card10.style.color = 'green';

            
//         }

//         let interval11 = setInterval(flipped11, 5000);
//     //card11 click
//         card11.addEventListener('click', function() {
//             card11.style.color = 'white';

//         })


//         function flipped11() {
//             card11.style.color = 'green';

            
//         }

//         let interval12 = setInterval(flipped12, 5000);
//     //card12 click
//         card12.addEventListener('click', function() {
//             card12.style.color = 'white';

//         })


//         function flipped12() {
//             card12.style.color = 'green';

            
//         }
        




//JUNK CODE BELOW://


//for past idea.  do not need
// let clicks = 0;
// let turn1 = 0;
// let turn2 = 0;
//FOR loop trial
// let i = 0;
//     for (let i = 0; i < 12; i++) {
//     card.addEventListener('click', function() {
//         card.style.color = 'white';
// })

//     }

// card1.addEventListener("click", function() {
//     if (clicks % 2 === 0) {
//         clicks++
//         card1.style.color = 'white';

//     }
//     else if (clicks % 2 === 1) {
//         clicks--
//         card1.style.backgroundColor = 'white';
//     }}

// //let square = document.querySelectorAll('.square');
//         let reset = document.querySelector('#reset');
// if (clicks % 2 === 0) {
//     clicks++
//     card.style.color = 'white';

// }
// else if (clicks % 2 === 1) {
//     clicks--
//     card.style.color = 'white';
// }



//let card = document.querySelector('div');

//  let interval = setInterval(flipped, 5000);

   //testing code above          
           //}
           
           //let interval = setInterval(transitionSlide, 5000);