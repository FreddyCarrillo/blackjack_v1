


let btnGetCard = document.querySelector('#btnGetCard');
let containerCardPlayerOne = document.querySelector('#containerCardPlayerOne');

btnGetCard.addEventListener('click',() => {
    let card = '2C';
    let newCard = document.createElement('img');
    let srcImg = `/public/assets/cards/${card}.png`;
    newCard.src = srcImg;


    console.log('newCard',newCard);

    newCard.classList.add('card', 'animate__animated', 'animate__fadeInTopRight');
    containerCardPlayerOne.append(newCard);
});
