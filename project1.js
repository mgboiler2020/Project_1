console.log("it works3")
//IF innerText of id = the innerText of the second id then do not
//change color of text back to green


//testing selecting and changing card


let card1 = document.querySelector('#card1');
let card2 = document.querySelector('#card2');
let card3 = document.querySelector('#card3');
let card4 = document.querySelector('#card4');
let card5 = document.querySelector('#card5');
let card6 = document.querySelector('#card6');
let card7 = document.querySelector('#card7');
let card8 = document.querySelector('#card8');
let card9 = document.querySelector('#card9');
let card10 = document.querySelector('#card10');
let card11 = document.querySelector('#card11');
let card12 = document.querySelector('#card12');
let clicks = 0;
let div = document.querySelectorAll('div');
console.log(div[0]);
console.log(div);
console.log(card1.innerText);

let card = document.querySelector('.card');
let i = 0;
    for (let i = 0; i < 12; i++) {
    card.addEventListener('click', function() {
        card.style.color = 'white';
})

    }

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

let interval = setInterval(flipped, 5000);
//card1 click
        card1.addEventListener('click', function() {
            card1.style.color = 'white';

        })
    

        function flipped() {
            card1.style.color = 'green';

            
        }
        
        

//card2 click        
        card2.addEventListener('click', function() {
            card2.style.color = 'white';

        })
    

        function flipped() {
            card2.style.color = 'green';

            
        }
//card3 click
        card3.addEventListener('click', function() {
            card3.style.color = 'white';

        })


        function flipped() {
            card3.style.color = 'green';

            
        }
        
//card4 click
        card4.addEventListener('click', function() {
            card4.style.color = 'white';

        })


        function flipped() {
            card4.style.color = 'green';

            
        }

    //card5 click
        card5.addEventListener('click', function() {
            card4.style.color = 'white';

        })


        function flipped() {
            card5.style.color = 'green';

            
        }

    //card6 click
        card6.addEventListener('click', function() {
            card6.style.color = 'white';

        })


        function flipped() {
            card6.style.color = 'green';

            
        }
        
//  let interval = setInterval(flipped, 5000);

   //testing code above          
           //}
           
           //let interval = setInterval(transitionSlide, 5000);