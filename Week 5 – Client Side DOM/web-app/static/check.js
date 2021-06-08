const Check = Object.create(null);
var chance = 5;
const word = ["yes"];
const letter = ["y","e","s"];

Check.play_round = function (message){
    if (letter.includes(message)){
        return "You are right";
    } else {
        return "Guess again";
    }
};

Check.chance = function (message){
    if (letter.includes(message)){
        return chance;
    } else {
        return chance - 1;
    }
};