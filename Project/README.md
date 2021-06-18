CID :01886834
Name: Shangyun Shi

Brief for the project:
This game is created for guessing the word. 
User types in the letter and press the guess letter button to see if the letter is in the word or not.
After guess the letters, the user must enter the word and press guess word button to win the game.
Or User can types the word in at the begnining to guess the word.

User only have 5 chances to guess in total no matter user press guess word button or guess letter button.


Coding

The message that send by client side is the user name. It is made by ajax and handler. And then the button and textarea will be disabled. Others will be shown by turn the display to block.

The word is setted by call the word function in Word Category. It creates the word that will be guessed by users. In Word Category, there is an array of all the words in different category. I used math. floor and math.random to chose one of the category in the array and use the same appraoch to get the chosen word in the chosen category. 

The hint is given by the category function in Word Category. It use the index of the array to check out if the word is in that subarray or not.

When enter a letter, the code will check if the letter is in the word by using letter function in Word Category. IF the letter is in the string, it will return the letter and string"you guess right" by clone templet, if not the chance value will be minus one and shown in the history by create the li. 

UI/UX

Key elements: textarea, buttons, history, created li, correct answer.

Data

The word array is sit on the web. The name is fetched by ajax and send it to server and the handler will return the data back to main file.

Debugging

When run the firfox debugger, it will show me where is the bug. I used inspect to see which part is going on and what should be come up but doesn't. Also the debug console also provide the type error and the position. So it is easily to find it out.
And I used to search online to see if I can solve the bug or change another way of writting it.
Sometimes, the bugs are really simple like forget return or semi-comma after bracket.

Best Practice

how I structured code to separate responsibilities: 
The word category file is to deal with all the things relates to word include word choosing, word category(to give the word hint), word letters to give the array of the letters in word.
The ajax file is to send the data to server side.
The count file is to deal with all the things with score. 

how I designed function interface, naming
For interface, I would like to keep it as simple as the web function so the colors I choose is not dense. I use purple to highlight the correct letter that user put in so the user will be notice.

For naming, I name by their aim and functions. Like button will be aim_button.
