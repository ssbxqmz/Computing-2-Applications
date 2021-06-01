const add_task = document.getElementById("user_add-task_button");
const user_new_task_button = document.getElementById("user_new_task_button");
const task_user_input = document.getElementById("task");
const tasks = document.getElementById("tasks");
var template = document.getElementById("user-task");
var finish_button =  template.content.querySelector("[id=finish-button]");
var task_finish =  template.content.querySelector("[id=task_finish]");


const cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};

const delete_task = function(id){
    return template.content.querySelector("[id=task_finish]").setAttribute("disabled", true);
};
user_new_task_button.onclick = function () {
    return console.log(add_task)
};

add_task.onclick = function () {
    console.log(task_user_input.value);
    const user_task = task_user_input.value;
    const task_new_text = cloneTemplate("user-task");
    task_new_text.querySelector(
        "[name=submitted-task]"
    ).textContent = user_task;
    tasks.appendChild(task_new_text);
};

finish_button.onclick = function() {
   const finish = ;
};