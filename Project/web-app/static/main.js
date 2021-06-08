import Check from "./check.js";

const add_task = document.getElementById("user_add-task_button");
const user_new_task_button = document.getElementById("user_new_task_button");
const task_user_input = document.getElementById("task");
const tasks = document.getElementById("tasks");
var user_input = [];

const history_list = document.getElementById("history_list");

let check_bot = Check.play_round;

const cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};


add_task.onclick = function () {
    console.log(task_user_input.value);
    const user_task = task_user_input.value;
    const task_new_text = cloneTemplate("user-task");
    task_new_text.querySelector(
        "[name=submitted-task]"
    ).textContent = user_task;
    tasks.appendChild(task_new_text);




    const check = Check.play_round(task_user_input.value);
    const check_respond = cloneTemplate("check-box");
    check_respond.querySelector(
        "[name=submitted-task]"
    ).textContent = check;
    tasks.appendChild(check_respond);




    const chance = Check.chance(task_user_input.value);
    const li = document.createElement("li");
    li.textContent = (
        `You have ${chance} chance left`
    );

    history_list.append(li);



    
    user_input.push(task_user_input.value);
    
};

