import dateFormat from '../../../js/utils/dateFormat.js';

export default class CommitCard {
    

    createCard(cardData) {
        const card = document.createElement('div');
        card.classList.add('carousel__cell');

        const cardImage = document.createElement('img');
        cardImage.classList.add('carousel__photo');
        cardImage.setAttribute('alt','Не удалось загрузить фотографию');
        cardImage.src = `${cardData.author.avatar_url}`;
    
        const infoColumn = document.createElement('div');
        infoColumn.classList.add('carousel__info');

        const cellColumn = document.createElement('div');
        cellColumn.classList.add('carousel__column');

        const commiterName = document.createElement('h3');
        commiterName.classList.add('carousel__name');
        commiterName.textContent = cardData.commit.committer.name;

        const text = document.createElement('p');
        text.classList.add('carousel__message');
        text.textContent = cardData.commit.message;

        const commiterEmail = document.createElement('p');
        commiterEmail.classList.add('carousel__e-mail');
        commiterEmail.textContent = cardData.commit.committer.email;

        const cardDate = dateFormat(cardData.commit.author.date);

        card.appendChild(cardDate);
        card.appendChild(infoColumn);
        infoColumn.appendChild(cardImage);
        infoColumn.appendChild(cellColumn);
        cellColumn.appendChild(commiterName);
        cellColumn.appendChild(commiterEmail);
        card.appendChild(text);
        return card;
    }
    
    
}