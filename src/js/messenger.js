import * as functions from "./modules/messengerFunctions.js";

window.onload = function () {
    functions.inputArea.addEventListener('input', functions.onInput);
    functions.sendButton.addEventListener('click', functions.onSendButtonClick);
    document.querySelectorAll('.user').item(0).classList.add('active');
};
