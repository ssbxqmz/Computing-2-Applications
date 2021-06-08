const Hint = Object.create(null);

const agreeOptions = [
    "a",
    "b",
    "c"
];

const letters = [
    "first letter",
    "second letter",
   "third letter"
];
Hint.agreeBot = {
    "name": "Hint",
    "response": function () {
        return letters[0];
        //message = (letters[String(message)]) ? letters[String(message)] : ""
        //return agreeOptions[Math.floor(Math.random() * agreeOptions.length)];
    }
};

Hint.reverseBot = {
    "name": "Reverse Bot",
    "response": function (message) {
        return message.split("").reverse().join("");
    }
};

export default Object.freeze(Robots);
