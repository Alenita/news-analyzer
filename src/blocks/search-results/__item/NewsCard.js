import dateFormat from '../../../js/utils/dateFormat.js';

export default class NewsCard {

    createCard(link, image, date, title, description, source ) {
        const card = document.createElement('li');
        card.classList.add('search-results__item');

        const cardLink = document.createElement('a');
        cardLink.classList.add('search-results__card-link');
        cardLink.setAttribute('href', `${link}`);
        cardLink.setAttribute('target','_blank');
   
        const cardImage = document.createElement('img');
        cardImage.classList.add('search-results__image');
        cardImage.setAttribute('alt','Не удалось загрузить фотографию');
        cardImage.src = `${image}`;
        
        //картинка-заглушка
        function errorImage() {
            cardImage.src = 'https://dummyimage.com/600x400/cf2dcf/000000&text=Image+not+found';
          }
        cardImage.addEventListener('error', errorImage);

    
        const infoColumn = document.createElement('div');
        infoColumn.classList.add('search-results__column');

        const descriptionBlock = document.createElement('div');
        descriptionBlock.classList.add('search-results__description');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('search-results__card-title');
        cardTitle.textContent = title;

        const text = document.createElement('p');
        text.classList.add('search-results__text');
        text.textContent = description;

        const cardSource = document.createElement('p');
        cardSource.classList.add('search-results__source');
        cardSource.textContent = source;

        const cardDate = dateFormat(date);

        card.appendChild(cardLink);
        cardLink.appendChild(cardImage);
        cardLink.appendChild(infoColumn);
        infoColumn.appendChild(descriptionBlock);
        descriptionBlock.appendChild(cardDate);
        descriptionBlock.appendChild(cardTitle);
        descriptionBlock.appendChild(text);
        infoColumn.appendChild(cardSource);

        return card;
    }
    
    
}