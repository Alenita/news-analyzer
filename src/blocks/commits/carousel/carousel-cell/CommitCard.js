import dateFormat from '../../../../js/utils/dateFormat.js';

export default class CommitCard {
    constructor(...args) {

        this.cardElement = this.createCard(...args);
    }


    createCard(date, image, name, email, message) {
        const card = document.createElement('div');
        card.classList.add('carousel-cell');

        const cardImage = document.createElement('img');
        cardImage.classList.add('carousel-cell__photo');
        cardImage.setAttribute('alt','Не удалось загрузить фотографию');
        cardImage.src = `${image}`;
    
        const infoColumn = document.createElement('div');
        infoColumn.classList.add('carousel-cell__info');

        const cellColumn = document.createElement('div');
        cellColumn.classList.add('carousel-cell__column');

        const commiterName = document.createElement('h3');
        commiterName.classList.add('carousel-cell__name');
        commiterName.textContent = name;

        const text = document.createElement('p');
        text.classList.add('carousel-cell__message');
        text.textContent = message;

        const commiterEmail = document.createElement('p');
        commiterEmail.classList.add('carousel-cell__e-mail');
        commiterEmail.textContent = email;

        const cardDate = dateFormat(date);

        card.appendChild(cardDate);
        card.appendChild(infoColumn);
        infoColumn.appendChild(cardImage);
        infoColumn.appendChild(cellColumn);
        cellColumn.appendChild(commiterName);
        cellColumn.appendChild(commiterEmail);
        descriptionBlock.appendChild(cardTitle);
        card.appendChild(text);
        return card;
    }
    
    
}