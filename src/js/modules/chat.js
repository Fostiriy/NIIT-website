import { histories, currentUserIndex } from "./users.js";

export const inputArea = document.querySelector('#input-area');
export const sendButton = document.querySelector('#send-button');
export const clearChatButton = document.querySelector('#clear-button');

// Обработка ввода текста до символа разделителя строки
export function onInput(event) {
    this.style.height = '37px';
    this.style.height = this.scrollHeight + 'px';
    if (event.inputType === 'insertLineBreak') {
        send(event.currentTarget.value.trim());
    }
}

// Нажатие на кнопку отправит сообщение
export function onSendButtonClick() {
    send(inputArea.value.trim());
}

export function onClearButtonClick() {
    histories[currentUserIndex] = [];
    localStorage.removeItem(`user-${currentUserIndex}`);
    refreshChat(histories[currentUserIndex]);
}

// Вставка сообщения с нужными параметрами на правильное место
export function insertMessage(userName, message) {
    let point = document.querySelector('.messages-block');
    let template = document.getElementById('new-message').content.cloneNode(true); // нашли шаблон сообщения
    let time = new Date();

    template.querySelector('.message-author').innerText = userName;
    template.querySelector('.message-time').innerText = ("00" + time.getHours()).slice(-2) + ":" + ("00" + time.getMinutes()).slice(-2);
    template.querySelector('.message-text').innerText = message;

    if (userName !== 'Вы') {
        // если не посланное нами сообщение, то уберём лишний класс
        template.querySelector('.message').classList.remove('sent-message');
        template.querySelector('.message-wrapper').classList.remove('sent-message-wrapper');
    }
    // добавим по месту вниз новое сообщение
    point.append(template);
}

export function refreshChat(history) {
    let chat = document.querySelector('.messages-block');
    chat.innerHTML = '';
    for (let i = 0; i < history.length; i++) {
        insertMessage(history[i].author, history[i].message);
    }
}

// Отправка сообщения на вставку
function send(message) {
    if (message.length <= 0)
        return;

    inputArea.value = '';

    addMessage('Вы', message); // добавляем сообщение в чат
    const chat = document.querySelector('.messages-block');
    chat.scrollTop = chat.scrollHeight; // сдвигаем прокрутку вниз
}

export function addMessage(author, message) {
    (histories[currentUserIndex])[histories[currentUserIndex].length] = { author, message };
    insertMessage(author, message);

    window.localStorage.setItem(`user-${currentUserIndex}`, JSON.stringify(histories[currentUserIndex]));
    console.log(JSON.stringify(histories[currentUserIndex]));
}




