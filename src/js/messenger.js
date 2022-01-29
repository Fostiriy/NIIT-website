import * as chat from "./modules/chat.js";
import * as users from "./modules/users.js";

window.onload = function () {
    chat.inputArea.addEventListener('input', chat.onInput);
    chat.sendButton.addEventListener('click', chat.onSendButtonClick);
    chat.clearChatButton.addEventListener('click', chat.onClearButtonClick);
    let historiesJson = [];
    for (let i = 0; i < users.users.length; i++) {
        let user = users.users.item(i)
        user.addEventListener('click', users.select);
        historiesJson.push(window.localStorage.getItem(`user-${i}`));
        let history = historiesJson[i];
        if (history !== "{}" && history !== null)
            users.loadHistory(i, JSON.parse(history));
        if (window.localStorage.getItem('currentUser') === `user-${i}`)
            users.selectUser(i);
    }
    chat.addMessage('Алексей Бураков', 'Попробуйте написать несколько сообщений!');
};
