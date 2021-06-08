import Robots from "./robots.js";
import Check from "./check";

const send_button = document.getElementById("send-button");
const composition = document.getElementById("composition");
const messages = document.getElementById("messages");
const history_list = document.getElementById("history_list");
const cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};

Object.
send_button.onclick = function(){
    console.log(composition.value);
    const new_message = cloneTemplate("messages");
    new_message.textContent = composition.value;
    messages.appendChild(new_message);
};

send_button.addEventListener("click", play_round);
send_button.onclick = function(){
    const composition = Check.play_round(messages);
    const li = document.createElement("li");
    li.textContent = ("You have ${chance} left");

    history_list.append(li);
};
