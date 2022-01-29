import * as chat from "./modules/chat.js";
import * as users from "./modules/users.js";

window.onload = function () {
    chat.inputArea.addEventListener('input', chat.onInput);
    chat.sendButton.addEventListener('click', chat.onSendButtonClick);
    users.users.item(0).classList.add('active');
    for (let i = 0; i < users.users.length; i++) {
        users.users.item(i).addEventListener('click', users.selectUser);
    }

};
