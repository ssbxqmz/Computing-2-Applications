const Word_category = Object.create(null);
const word_array = [
    ["london", "manchester", "birmingham", "leeds", "glasgow"],
    ["new york city", "los angeles", "chicago", "houston", "phoenix"],
    ["beijing", "shanghai", "tianjin", "shenzhen", "guangzhou"],
    ["tokyo", "yokohama", "osaka", "nagoya", "sapporo"]
];
Word_category.word ={
    "response": function () {
        const chosenCategory = word_array[
            Math.floor(Math.random() * word_array.length)
        ];
        const chosenWord = chosenCategory[
            Math.floor(Math.random() * chosenCategory.length)
        ];
        return chosenWord;
    }
};

Word_category.letter = function (input) {
    const letter = input.split("");
    return letter;
};

Word_category.category = function (word) {
    if (word_array[0].includes(word)) {
        return "One of the five largest cities in Britain";
    } else if (word_array[1].includes(word)) {
        return "One of the five largest cities in USA"
    } else if (word_array[2].includes(word)) {
        return "One of the five largest cities in China"
    } else if (word_array[3].includes(word)) {
        return "One of the five largest cities in Japan"
    }
}
export default Object.freeze(Word_category);