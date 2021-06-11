const Word_category = Object.create(null);

Word_category.word = function () {
    const word_array = [
        ["london", "manchester", "birmingham", "leeds", "glasgow"],
        ["new york city", "los angeles", "chicago", "houston", "phoenix"],
        ["beijing", "shanghai", "tianjin", "shenzhen", "guangzhou"],
        ["Toronto", "Montréal", "Vancouver", "Calgary", "Edmonton"]
    ];
    const chosenCategory = word_array[
        Math.floor(Math.random() * word_array.length)
    ];
    const chosenWord = chosenCategory[
        Math.floor(Math.random() * chosenCategory.length)
    ];
    return chosenWord;
};

Word_category.letter = function (input) {
    const letter = input.split("");
    return letter;
};

export default Object.freeze(Word_category);