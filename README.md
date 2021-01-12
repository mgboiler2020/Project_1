# Project_1
Flash Cards

GA Minimal Requirements:

-------------------------------------
Pre-load your app with some data, and let the user flip through them quickly (back or front), and use the keyboard flip the card, and to mark whether they got it right or not. Track which cards were incorrect, and re-display them until the user gets them right!
-------------------------------------

UPDATED MVP - Each card has a letter.  There are 6 pairs of cards.  The letter and card background are same color.  When clicked, the color of the letter changes to white.  A setInterval turns the letter back to original color if two clicks do not match a pair.  Successful pairing of two cards remain visible on the screen until all choices are correct.

Original MVP - 12 “cards”, face-side has a letter, back is blank (this is actually a div class container.  The container has two subclasses, one for front, one for back.  A click makes the top div transparent (via opacity in CSS).




Stretch Goals:
1) Cards randomly sorted - silver
2)	Score points for correct pair - silver
3)  Points increase for consectutive correct choices (1 correct choice - 1 pt, 2 correct choices in a row - 2 pts, and so on)
4) Animate the click action - gold
5) Add images for cards - silver
