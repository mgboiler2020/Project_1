console.log("it works3")
//IF innerText of id = the innerText of the second id then do not
//change color of text back to green


//testing selecting and changing card

let card = document.querySelectorAll('.card');


// //let square = document.querySelectorAll('.square');
//         let reset = document.querySelector('#reset');

        card.addEventListener('click', function() {
            card.style.color = 'white';

        })


        function flipped() {
            card.style.color = 'green';

            
        }
        
        let interval = setInterval(flipped, 5000);

   //testing code above          
           //}
           
           //let interval = setInterval(transitionSlide, 5000);