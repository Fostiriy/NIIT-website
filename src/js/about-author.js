fetch('files/about-author.json').then(response => {
    response.json().then(result => {
        insertCards(result);
    });
});

function insertCards(jsonObj) {
    let cards = jsonObj;
    let point = document.querySelector('.facts-block');
    for (let card in cards) {
        let template = document.getElementById('new-card').content.cloneNode(true); // нашли шаблон карточки
        let title = template.querySelector('.card-title');
        let text = template.querySelector('.card-text');
        title.innerHTML = card;
        text.innerHTML = cards[card];
        point.append(template);
    }
}

// Альтернативный код

// var requestURL = 'files/about-author.json';
// var request = new XMLHttpRequest();
//
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//     var cardsInfo = request.response;
//     insertCards(cardsInfo);
// }


