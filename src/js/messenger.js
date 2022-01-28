const inputArea = document.querySelector('#input-area-1');
const sendButton = document.querySelector('#send-button-1');
const currentChat = document.querySelectorAll('.user').item(0);
currentChat.classList.add('active');

window.onload = function () {
    inputArea.addEventListener('input', onInput);
    sendButton.addEventListener('click', onSendButtonClick);
};

// Раздел описания функций

// Обработка ввода текста до символа разделителя строки
function onInput(event) {
    this.style.height = this.scrollHeight + 'px';
    if (event.inputType === 'insertLineBreak') {
        send(event.currentTarget.value.trim());
    }
}

// Нажатие на кнопку отправит сообщение
function onSendButtonClick() {
    send(inputArea.value.trim());
}

// Отправка сообщения на вставку
function send(value) {
    if (value.length <= 0)
        return;

    inputArea.value = '';

    insertMessage('Вы', value); // добавляем сообщение в чат
    const chat = document.querySelector('.messages-block');
    chat.scrollTop = chat.scrollHeight; // сдвигаем прокрутку вниз
}

// Вставка сообщения с нужными параметрами на правильное место
function insertMessage(user, message) {
    let point = document.querySelector('.messages-block');
    let template = document.getElementById('new-message').content.cloneNode(true); // нашли шаблон сообщения
    let time = new Date();

    template.querySelector('.message-author').innerText = user;
    template.querySelector('.message-time').innerText = time.getHours().toString() + ":" + time.getMinutes().toString();
    template.querySelector('.message-text').innerText = message;

    if (user !== 'Вы') {
        // если не посланное нами сообщение, то уберём лишний класс
        template.querySelector('.messages-block').classList.remove('sent-message');
    }
    // добавим по месту вниз новое сообщение
    point.append(template);
}
