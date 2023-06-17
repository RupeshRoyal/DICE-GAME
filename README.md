# DICE-GAME

The website appears to be a simple virtual dice game. Here's a quick summary of its functionality:

--> When the webpage is loaded, it displays two dice images and a "Refresh Me" heading.
--> The dice images are initially set to show the image of a dice with a random number generated using Math.random() and some operations.
--> There is a "Play" button that allows the user to refresh the dice images and determine the winner.
--> Clicking the "Play" button triggers a JavaScript function.
--> The JavaScript function generates random numbers between 1 and 6 for each dice roll.
--> The random numbers determine the dice images to be displayed.
--> After the dice images are updated, the JavaScript code compares the two random numbers.
--> Based on the comparison, the content of the <h1> heading is modified to indicate the winner (Player 1, Player 2, or a draw).
--> The user can click the "Play" button again to refresh the dice images and determine the winner of the new roll.
--> At the bottom of the webpage, there is a footer that displays the text "Copyrights@Rupesh."
In summary, the website allows users to play a virtual dice game where they can roll two dice, see the outcomes, and determine the winner based on the dice roll results.
  
//////index.js file summary//////
 --> randomNumber1 is a variable that generates a random integer between 1 and 6 using Math.random() and some mathematical operations. It represents the value of the first dice roll.
--> randomImage is a variable that concatenates the string "dice" with randomNumber1 and ".png" to form the filename of the corresponding dice image.
--> randomImageSource1 is a variable that combines the string "images/" with randomImage to form the source path of the image file.
--> The variable image1 is assigned the reference to the first image element on the page using document.querySelectorAll("img")[0].
--> The setAttribute() method is used to set the src attribute of image1 to the randomImageSource1, which changes the image displayed on the webpage.
Similarly, the code repeats steps 4 and 5 for the second dice roll, generating randomNumber2, randomImageSource2, and image2.
Depending on the comparison between randomNumber1 and randomNumber2, the code modifies the content of the <h1> element.
--> If randomNumber1 is greater than randomNumber2, the text "🚩Player 1 wins" is set as the content of the <h1> element.
    else If randomNumber1 is less than randomNumber2, the text "Player 2 wins🚩" is set as the content of the <h1> element.
    else If randomNumber1 is equal to randomNumber2, the text "Draw!!" is set as the content of the <h1> element.
In summary, this JavaScript code generates random numbers, changes the dice images displayed on the webpage accordingly, and updates the text content of the <h1> element based on the dice roll results.











