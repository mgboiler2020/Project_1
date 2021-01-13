# Project_1
Flash Cards

GA Minimal Requirements:

-------------------------------------
Pre-load your app with some data, and let the user flip through them quickly (back or front), and use the keyboard flip the card, and to mark whether they got it right or not. Track which cards were incorrect, and re-display them until the user gets them right!
-------------------------------------

MVP - Each card has a letter.  There are 6 pairs of cards.  There are two divs/cards stacked.  The bottom div/card displays a letter covered up by the top div.  When clicked, the color of top layer div becomes transparent.  A setTimeout turns the top layer opaque if two clicks do not match a pair.  Successful pairing of two cards remain visible on the screen until all choices are correct.

Link to Game:

https://mgboiler2020.github.io/


Tools Needed to Play:
- Internet Browser

Game Created With:
- HTML
- CSS
- JavaScript

References:
- https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae

- reference: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

- https://www.w3schools.com/jsref/jsref_foreach.asp

- w3schools.com used often for various information related to syntax and definitions and function.

Approach:
Using divs and data attributes I made the structure of two stacked divs.  The top div becomes transparent to display the letter on the bottom div.

I started out trying to hardcode all the variables, objects, and eventListeners.  I encountered an impedement which was taking too long resolve (given the time remaining for the project).  I ended up refactoring and using a much more simple path.    

Lesssons Learned:
This project has taught me the importance of pseudo code and researching prior to building up a javaScript file.  I also learned how to better debug my code and further strengthened my understanding of how the code is behaving.


Stretch Goals:
1) Cards randomly sorted - silver
2)	Score points for correct pair - silver
3)  Points increase for consectutive correct choices (1 correct choice - 1 pt, 2 correct choices in a row - 2 pts, and so on) - gold
4) Animate the click action - gold
5) Add images for cards - silver
6) reset board upon completion of 6 matched pairs. - silver
7) Add styling and box designs that are random when the game is reloaded after a win - gold
