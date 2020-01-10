import { CARD_PORTION} from '../../js/constants/constants.js';
const addButton = document.querySelector('.search-results__more-cards');

export default class SearchResults {
    constructor(list) {
        this.list = list;
        this.cardPortion = CARD_PORTION;
        this.lastCard = 0;
    }

    _checkBalance(data, card) {
        if (this.lastCard < data.length) {
            addButton.classList.add('search-results__more-cards_visible');
            addButton.onclick = () =>  this.render(data, card);
            }
        else {
            addButton.classList.remove('search-results__more-cards_visible');
        };
    }


    deleteCards() {
        while (this.list.firstChild) {
            this.list.removeChild(this.list.firstChild);
          }
    }

    render(data, card) {
        const articles = data;
        for (let i = this.lastCard; i < Math.min(this.lastCard + this.cardPortion, articles.length); i++) {
            const article = articles[i];
            this.list.appendChild(card.createCard(
                    article.url,
                    article.urlToImage,
                    article.publishedAt,
                    article.title, 
                    article.description,
                    article.source.name ));
        }
        this.lastCard = this.lastCard + this.cardPortion; 
        this._checkBalance(data, card);
    }

}
