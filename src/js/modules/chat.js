export const inputArea = document.querySelector('#input-area-1');
export const sendButton = document.querySelector('#send-button-1');

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

// Отправка сообщения на вставку
export function send(value) {
    if (value.length <= 0)
        return;

    inputArea.value = '';

    insertMessage('Вы', value); // добавляем сообщение в чат
    const chat = document.querySelector('.messages-block');
    chat.scrollTop = chat.scrollHeight; // сдвигаем прокрутку вниз
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
        template.querySelector('.messages-block').classList.remove('sent-message');
    }
    // добавим по месту вниз новое сообщение
    point.append(template);
}



