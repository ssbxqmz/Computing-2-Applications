
import Check from "./check.js";
import Word_category from "./word category.js";
import Count from "./count.js";
import wordCategory from "./word category.js";
import Ajax from "./ajax.js";

const start = document.getElementById("start");
const add_guess = document.getElementById("guess_button");
const category = document.getElementById("category");
const cate_info = document.getElementById("cate-info");
const guess_input = document.getElementById("guess_box");
const guess = document.getElementById("guess");
const chance_left = document.getElementById("chance left");
const guess_word = document.getElementById("guess by word");
const hint = document.getElementById("hint");
const length_list = document.getElementById("length_list");
const word_ = document.getElementById("word");
const name_id = document.getElementById("id");
const id_button = document.getElementById("id_button");
const history_list = document.getElementById("history_list");
const main_appear = document.getElementById("main");
const aside_appear = document.getElementById("aside");
const greeting = document.getElementById("greeting");
const cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};

start.onclick = function(){
    console.log(name_id);
    main_appear.style.display = "block";
    aside_appear.style.display = "block";
    name_id.style.display = "none";
    start.style.display = "none";
    greeting.style.display="none";

    Ajax.query({
        "type": "identify",
        "message": name_id.value
    }).then(function (response_object) {
        const word_li = document.createElement("li");
        word_li.textContent = (
            `Welcome ${response_object}`);
        word_.append(response_object);
    });
};


const word = Word_category.word();
const category_hint = wordCategory.category(word);
let word_array = Word_category.letter(word);
let  chance = 5;
hint.onclick = function () {
    const word_length = word.length;
    const length_hint = document.createElement("li");
    length_hint.textContent = (
        `There are ${word_length} letters in the word`
    );
    length_list.append(length_hint);


    const category_list = document.createElement("li");
    category_list.textContent = (
        `${category_hint}`
    );
    cate_info.append(category_list);
};
add_guess.onclick = function () {
    console.log(guess_input.value);
    const user_task = guess_input.value;
    const count = Count.number(word_array,user_task);
    const index = word.indexOf(user_task);
    if (user_task.length > 1) {
        alert("try guess word button");
    } else{
        if (index !== -1) {
            console.log(guess_input.value);
            const task_new_text = cloneTemplate("user-task");
            if (count === 1) {
                task_new_text.querySelector(
                    "[name=submitted-task]"
                ).textContent = (
                    ` ${user_task} appears ${count} time in the word`
                );
                guess.appendChild(task_new_text);
            } else {
                task_new_text.querySelector(
                    "[name=submitted-task]"
                ).textContent = (
                    ` ${user_task} appears ${count} times in the word`
                    );
                guess.appendChild(task_new_text);
            }
        } else {
            chance = chance - 1;

            if (chance >= 0){
                const chance_li = document.createElement("li");
                chance_li.textContent = (
                `You have ${chance} chance left`
                );
                chance_left.append(chance_li);
            } else{
                add_guess.setAttribute("disabled",true);
                alert(`the word is ${word}`);
            }
        }
    }

};

guess_word.onclick = function() {
    console.log(guess_input.value);
    const user_task = guess_input.value;
    if (user_task === word){
        alert("You win the game!");
        let answer = confirm("Do you want to start a new game");
        if (answer === true) {
            location.reload();
        }
    }else{
        chance = chance - 1;

        if (chance >= 0){
            const chance_li = document.createElement("li");
            chance_li.textContent = (
            `You have ${chance} chance left`
            );
            chance_left.append(chance_li);
        } else{
            add_guess.setAttribute("disabled",true);

        }
    }

};



