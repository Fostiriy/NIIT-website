import { refreshChat } from "./chat.js";

export const users = document.querySelectorAll('.user');
export let histories = [];
for (let i = 0; i < users.length; i++) {
    histories[i] = [];
}
export let currentUserIndex = 0;
let currentUser = users[currentUserIndex];

export function select() {
    if (currentUser != this) {
        currentUser.classList.remove('active');
        currentUser = this;
        currentUser.classList.add('active');
        for (let i = 0; i < users.length; i++) {
            if (users[i] == currentUser) {
                refreshChat(histories[i]);
                window.localStorage.setItem('currentUser', `user-${i}`);
                currentUserIndex = i;
                break;
            }
        }
    }
}

export function selectUser(index) {
    currentUserIndex = index;
    currentUser.classList.remove('active');
    currentUser = users[index];
    currentUser.classList.add('active');
    refreshChat(histories[index]);
    window.localStorage.setItem('currentUser', `user-${index}`);
}

export function loadHistory(index, history) {
    histories[index] = history;
}