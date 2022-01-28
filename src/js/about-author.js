var requestURL = 'files/about-author.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var cardsInfo = request.response;
    insertCards(cardsInfo);
}

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

// fetch('img/art-station.json')
//     .then(response => {
//         response.json().then(result => {
//             pasteImage(result.card1);
//             pasteImage(result.card2);
//             pasteImage(result.card3);
//         });
//     });
//
// function pasteImage(source) {
//     const image = new Image();
//     image.src = source;
//     document.querySelector('.about-block').append(image);
// }
