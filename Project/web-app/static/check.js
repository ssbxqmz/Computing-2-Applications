import Word_category from "./word category.js";
const Check = Object.create(null);
var chance = 5;
const word = "yes";
const letter = ["y","e","s"];

Check.play_round = function (message){
    if (Word_category.letter().includes(message)){
        return "You are right";
    } else {
        return "Guess again";
    }
};

Check.chance = function (message){
    if (Word_category.letter().includes(message)){
        return chance;
    } else {
        chance = chance - 1;
        return chance;
    }
};

Check.correct = function(message){
    if (message = Word_category.word()){
        return "That is the word! You win!"
    } else {
        return "No, it is not the word."
    }
};


export default Object.freeze(Check);