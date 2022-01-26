fetch('img/art-station.json').then(response => {
    response.json().then(result => {
        pasteImage(result.card1);
        pasteImage(result.card2);
        pasteImage(result.card3);
    });
});

function pasteImage(source) {
    const image = new Image();
    image.src = source;
    document.querySelector('.about-block').append(image);
}
