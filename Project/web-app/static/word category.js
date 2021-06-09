const Word_category = Object.create(null);

Word_category.word = function () {
    const word_array = [
        ["imperial", "college", "london"],
        ["univercity", "of", "oxford" ]
    ];
    const chosenCategory = word_array[
        Math.floor(Math.random() * word_array.length)
    ];
    const chosenWord = chosenCategory[
        Math.floor(Math.random() * chosenCategory.length)
    ];
    return chosenWord;

};

Word_category.letter = function () {
    const letter = Word_category.word().split("");
    return letter;
};

export default Object.freeze(Word_category);