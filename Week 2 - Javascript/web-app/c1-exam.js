/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (array) {
    return array.filter((ignore, k) => k % 3 === 0);
};


// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (sentences1, sentences2) {
        var a = sentences1.split(" ");
        var b = sentences2.split(" ");
        var mergedString = "";
        if (sentences2.length = sentences1.length){
            for( i = 0; i < a.length; i++) {
                mergedString += a[i] + ' '+ b[i]+' ';
            }
            return mergedString.slice(0,((mergedString.length)-1));
        }else {
            return ValueError
        }
};               //E.X:
// const sentences1= "the cow jumped over the moon"
//const sentences2= "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
//Exam.merge_sentences = function (sentences1, sentences2) {
        //var a = sentences1.split(" ");
        //var b = sentences2.split(" ");
        //var mergedString = '';
        //if (sentences2.length = sentences1.length){
          //  for( i = 0; i < a.length; i++) {
            //    mergedString += a[i] + ' '+ b[i]+ ' ';
            //}
            //return console.log(mergedString.slice(0,((mergedString.length)-1)));
        //}else {
          //  return ValueError
        //}

  // expected output: [4, 1, 4, 20, 16, 1, 18]
    //sentences1[i]+sentences2[i]
    //return;
//};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (inputs) {
    let upper_array = inputs.toUpperCase().split("");
    let input_array = inputs.split("");
    let j =0;
    for (var i = 0; i<inputs.length;i++){
        if(input_array[i]!= upper_array[i]){
            j=j+1

        }
    }
    return console.log(j);
};

// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (object) {
    let key = Object.keys(object);
    let j =0;
    for (var i = 0; i< (key.length); i++){
        if ((key[j]).length < (key[j+1]).length){
            j=j+1
        }
    }
    return console.log( key[j]);
};
//const object = {'a':1,'ab':2,'abc':3,'abcde':4,'acb':5};
//let key = Object.keys(object);
//console.log(key);
//console.log(key[2].length);
//let j =0;
//for (var i = 0; i< (key.length); i++){
  //if ((key[j]).length < (key[j+1]).length){
    //  j=j+1
  //}
//}
//return console.log( key[j])

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function () {
    let value = Object.values(object);
    return Math.max.apply(Math,value);
};
            //Ex
            //const object = {'a':2,'ab':2,'abc':8,'abcde':9,'acb':5};
            //let value = Object.values(object);
             //return console.log(Math.max.apply(Math,value))
// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (greeting) {
    let username = prompt('username');
    let location = prompt('location','London');
    return prompt(`Hello, ${username}, how is ${location}?`);
};
             //Ex
             //let username = prompt('username');
             //let location = prompt('location','London');
             //console.log(prompt(`Hello, ${username}, how is ${location}?`));


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function () {
    const x = prompt('x =');
    const scalar = prompt('scalar =',1);
    const offset = prompt('offset =',0);
    if (x*scalar + offset > 0){
        return 0;
    }
    else{
        return Number(x)*Number(scalar) + Number(offset);
    }
};
            // Ex
            // const x = prompt('x =')
           //const scalar = prompt('scalar =',1)
          //const offset = prompt('offset =',0)
          //if (x*scalar + offset > 0){
         //return console.log(0);
         //}
         //else{
         //return console.log(Number(x)*Number(scalar) + Number(offset));
         //}

export default Object.freeze(Exam);
