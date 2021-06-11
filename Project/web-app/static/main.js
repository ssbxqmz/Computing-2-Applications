import Check from "./check.js";
import Word_category from "./word category.js";
import Count from "./count.js";

const categories = [  
    ["imperial","college", "london"],
["univercity","of", "oxford"]
];
const start = document.getElementById("start");
const add_task = document.getElementById("user_add-task_button");
const category = document.getElementById("category");
const cate_info = document.getElementById("cate-info");
const task_user_input = document.getElementById("task");
const tasks = document.getElementById("tasks");
const chance_left = document.getElementById("chance left");
const guess_word = document.getElementById("guess by word");


const history_list = document.getElementById("history_list");

const cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};

const word = Word_category.word();
let word_array = Word_category.letter(word);
let  chance = 5;

add_task.onclick = function () {
    console.log(task_user_input.value);
    const user_task = task_user_input.value;
    const count = Count.number(word_array,user_task);
    const index = word.indexOf(user_task);
    if (user_task.length > 1) {
        alert("try guess word button");
    } else{
        if (index !== -1) {
            console.log(task_user_input.value);
            const task_new_text = cloneTemplate("user-task");
            if (count === 1) {
                task_new_text.querySelector(
                    "[name=submitted-task]"
                ).textContent = ( 
                    ` ${user_task} appears ${count} time in the word`
                );
                tasks.appendChild(task_new_text);
            } else {
                task_new_text.querySelector(
                    "[name=submitted-task]"
                ).textContent = ( 
                    ` ${user_task} appears ${count} times in the word`
                    );
                tasks.appendChild(task_new_text);
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
                add_task.setAttribute("disabled",true);
            }
        }
    }

};

guess_word.onclick = function() {
    console.log(task_user_input.value);
    const user_task = task_user_input.value;
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
            add_task.setAttribute("disabled",true);

        }
    }

};
